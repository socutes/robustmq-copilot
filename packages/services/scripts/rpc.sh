#!/bin/sh
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

set -u -e

SCRIPT_DIR="$(dirname "$0")"
BASE_PATH="$SCRIPT_DIR/../../../robustmq-proto/protos"

GENERATE_BASE_PATH="$SCRIPT_DIR/../protos"

if [ ! -d "$BASE_PATH" ]; then
    echo "$BASE_PATH does't exist"
    exit 1
fi

# clean the generate path
rm -rf "$GENERATE_BASE_PATH"

mkdir -p "$GENERATE_BASE_PATH"


generate_proto_files() {
  local target_dir="$BASE_PATH/$1/proto"
  local proto_files=""
  
  local common_proto_folder="$BASE_PATH/prost_validation_types/proto"
  local generate_path="$GENERATE_BASE_PATH/$1"

  mkdir -p "$generate_path"

  while IFS= read -r file; do
  # get all `proto` directories
  if [[ "$file" == *"/proto/"* ]]; then
    relative_file_name=$(echo "$file" | sed -E 's/.*\/proto\/(.*)/\1/')

    if [[ "$proto_files" != *"$relative_file_name"* ]]; then
      proto_files="$proto_files $relative_file_name"
    fi
  fi
  done < <(find "$target_dir" -type f -name "*.proto")
  
  protoc -I="$target_dir" -I="$common_proto_folder" $proto_files \
    --js_out="import_style=commonjs:$generate_path" \
    --grpc-web_out="import_style=typescript,mode=grpcwebtext:$generate_path"
}

generate_proto_files "broker_mqtt"
generate_proto_files "journal_server"
generate_proto_files "placement_center"
generate_proto_files "prost_validation_types"


update_imports() {
  find "$GENERATE_BASE_PATH" -type f -name "*.js" | while read -r file; do
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' 's|var validate_validate_pb = require('\''./validate/validate_pb.js'\'');|var validate_validate_pb = require('\''../prost_validation_types/validate/validate_pb.js'\'');|g' "$file"
    else
      sed -i 's|var validate_validate_pb = require('\''./validate/validate_pb.js'\'');|var validate_validate_pb = require('\''../prost_validation_types/validate/validate_pb.js'\'');|g' "$file"
    fi
  done
}

update_imports 