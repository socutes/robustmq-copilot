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
        <div className="min-h-[calc(100vh-12rem)]">{props.children}</div>

        {/* Footer - 粘性定位在底部 */}
        <footer className="sticky bottom-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-2 mt-auto">
          <div className="text-center text-xs text-muted-foreground">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <span className="font-semibold text-purple-600 dark:text-purple-400">@RobustMQ</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                - New generation of cloud-native and AI-native messaging infrastructure
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4">
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
      </Main>
    </>
  );
}

CommonLayout.displayName = 'CommonLayout';
