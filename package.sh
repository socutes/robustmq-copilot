#!/usr/bin/env bash
# Copyright 2023 RobustMQ Team
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Package robustmq-copilot source code into a tar.gz archive and upload to remote server.
# Usage: ./package.sh [output_dir]
# Default output dir is the project root.

REMOTE_HOST="root@117.72.92.117"
REMOTE_DIR="/root/robustmq-copilot"

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"

OUTPUT_DIR="${1:-$PROJECT_ROOT}"
VERSION=$(git -C "$PROJECT_ROOT" describe --tags --always --dirty 2>/dev/null || echo "dev")
TIMESTAMP=$(date +%Y%m%d%H%M%S)
ARCHIVE="$OUTPUT_DIR/robustmq-copilot-${VERSION}-${TIMESTAMP}.tar.gz"

LOCAL_BRANCH=$(git -C "$PROJECT_ROOT" rev-parse --abbrev-ref HEAD)

# Only pack files changed/added relative to origin/<branch>, plus untracked files.
CHANGED_FILES=$(git -C "$PROJECT_ROOT" diff --name-only --diff-filter=ACM "origin/${LOCAL_BRANCH}" 2>/dev/null || true)
UNTRACKED_FILES=$(git -C "$PROJECT_ROOT" ls-files --others --exclude-standard -- packages/ LICENSE README.md package.json package.sh pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json 2>/dev/null || true)
DELETED_FILES=$(git -C "$PROJECT_ROOT" diff --name-only --diff-filter=D "origin/${LOCAL_BRANCH}" 2>/dev/null || true)

# Combine changed + untracked, always include all root-level project files, exclude .tar.gz and node_modules
ALL_FILES=$(printf '%s\n%s\nLICENSE\nREADME.md\npackage.json\npackage.sh\npnpm-lock.yaml\npnpm-workspace.yaml\ntsconfig.json' "$CHANGED_FILES" "$UNTRACKED_FILES" \
  | grep -v '\.tar\.gz$' \
  | grep -v '^$' \
  | grep -v 'node_modules' \
  | sort -u)

if [ -z "$ALL_FILES" ]; then
  echo "No changed files to package."
  SKIP_ARCHIVE=1
else
  SKIP_ARCHIVE=0
  printf '%s\0' $ALL_FILES \
    | COPYFILE_DISABLE=1 tar czf "$ARCHIVE" -C "$PROJECT_ROOT" --null -T -
  echo "Packaged: $ARCHIVE ($(du -sh "$ARCHIVE" | cut -f1)) — $(echo "$ALL_FILES" | wc -l | tr -d ' ') files"
fi

echo "Local branch: ${LOCAL_BRANCH}"

ARCHIVE_NAME="$(basename "$ARCHIVE")"
if [ "${SKIP_ARCHIVE}" -eq 0 ]; then
  echo "Uploading to ${REMOTE_HOST}:${REMOTE_DIR} ..."
  scp "$ARCHIVE" "${REMOTE_HOST}:${REMOTE_DIR}"
  echo "Upload complete: ${REMOTE_HOST}:${REMOTE_DIR}/${ARCHIVE_NAME}"
  rm "$ARCHIVE"
  echo "Local archive deleted."
fi

# Build remote delete commands for locally-deleted files.
REMOTE_DELETE_CMDS=""
if [ -n "$DELETED_FILES" ]; then
  echo "Files deleted locally (will remove on remote):"
  while IFS= read -r f; do
    echo "  - $f"
    REMOTE_DELETE_CMDS="${REMOTE_DELETE_CMDS}  rm -f \"${REMOTE_DIR}/${f}\" && echo \"Deleted: ${f}\" || true"$'\n'
  done <<< "$DELETED_FILES"
fi

echo "Syncing remote branch ..."
ssh "${REMOTE_HOST}" "
  set -e
  cd ${REMOTE_DIR}
  REMOTE_BRANCH=\$(git rev-parse --abbrev-ref HEAD)
  echo \"Remote branch: \${REMOTE_BRANCH}\"
  if [ \"\${REMOTE_BRANCH}\" != \"${LOCAL_BRANCH}\" ]; then
    echo \"Switching remote branch to ${LOCAL_BRANCH} ...\"
    git fetch origin
    git checkout ${LOCAL_BRANCH} || git checkout -b ${LOCAL_BRANCH} origin/${LOCAL_BRANCH}
  fi
  git pull origin ${LOCAL_BRANCH}
  if [ -f \"${ARCHIVE_NAME}\" ]; then
    tar xzf ${ARCHIVE_NAME} --warning=no-unknown-keyword && rm ${ARCHIVE_NAME}
  fi
  find ${REMOTE_DIR} -maxdepth 1 -name '*.tar.gz' -delete
${REMOTE_DELETE_CMDS}
  git add -A
  git diff --cached --quiet || git commit -m 'dev'
  PUSH_RETRY=0
  MAX_PUSH_RETRIES=3
  until git push origin ${LOCAL_BRANCH} 2>&1 | tee /tmp/push_output.txt; do
    PUSH_OUTPUT=\$(cat /tmp/push_output.txt)
    if echo \"\${PUSH_OUTPUT}\" | grep -qiE 'refusing|403|permission|scope|authentication|not allowed'; then
      echo \"Push permanently rejected (permission/auth error), aborting.\"
      cat /tmp/push_output.txt
      exit 1
    fi
    PUSH_RETRY=\$((PUSH_RETRY + 1))
    if [ \${PUSH_RETRY} -ge \${MAX_PUSH_RETRIES} ]; then
      echo \"Push failed after \${MAX_PUSH_RETRIES} retries, giving up.\"
      exit 1
    fi
    echo \"Push failed, retrying (\${PUSH_RETRY}/\${MAX_PUSH_RETRIES})...\"
    sleep 3
  done
  echo \"Push succeeded after \${PUSH_RETRY} retries.\"
  echo \"Done.\"
"
echo "Remote extraction complete."

find "$PROJECT_ROOT" -maxdepth 1 -name '*.tar.gz' -delete
echo "Local .tar.gz files cleaned up."
