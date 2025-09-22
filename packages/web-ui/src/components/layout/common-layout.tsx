import { Header } from '@/components/layout/header';
import { ThemeSwitch } from '@/components/theme-switch';
import { InspirationalQuote } from '@/components/inspirational-quote';
import { Main } from './main';
import { ExternalLink } from 'lucide-react';

interface CommonLayoutProps {
  children: React.ReactNode;
}

export function CommonLayout(props: CommonLayoutProps) {
  return (
    <>
      <Header fixed>
        <div className="ml-auto flex items-center space-x-4">
          <InspirationalQuote />
          <ThemeSwitch />
        </div>
      </Header>

      <Main>
        <div className="min-h-[calc(100vh-4rem)] flex flex-col">
          <div className="flex-1">{props.children}</div>

          {/* Footer - 固定在底部 */}
          <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 pt-6 pb-4">
            <div className="text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <span className="font-semibold text-purple-600 dark:text-purple-400">@RobustMQ</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  - New generation of cloud-native and AI-native messaging infrastructure
                </span>
              </div>
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://github.com/robustmq/robustmq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://robustmq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Official Website</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </Main>
    </>
  );
}

CommonLayout.displayName = 'CommonLayout';
