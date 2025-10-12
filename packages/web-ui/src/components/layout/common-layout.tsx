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
        <div className="pb-16">{props.children}</div>
      </Main>

      {/* Footer - 固定在页面底部 */}
      <footer className="fixed bottom-0 left-0 right-0 ml-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-1 z-[5] peer-data-[state=collapsed]/sidebar:w-[calc(100%-var(--sidebar-width-icon))] peer-data-[state=expanded]/sidebar:w-[calc(100%-var(--sidebar-width))] transition-[width] duration-200 ease-linear">
        <div className="flex flex-col items-center text-xs text-muted-foreground" style={{ marginLeft: '15%' }}>
          <div className="flex items-center space-x-2 mb-1.5">
            <span className="font-semibold text-purple-600 dark:text-purple-400">@RobustMQ</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              - New generation of cloud-native and AI-native messaging infrastructure
            </span>
          </div>
          <div className="flex items-center space-x-4">
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
    </>
  );
}

CommonLayout.displayName = 'CommonLayout';
