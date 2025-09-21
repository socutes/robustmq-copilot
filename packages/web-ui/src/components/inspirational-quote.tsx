import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

// 励志英语名言数据
const inspirationalQuotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Innovation distinguishes between a leader and a follower. - Steve Jobs',
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  'First, solve the problem. Then, write the code. - John Johnson',
  'Experience is the name everyone gives to their mistakes. - Oscar Wilde',
  'In order to be irreplaceable, one must always be different. - Coco Chanel',
  'Java is to JavaScript what car is to Carpet. - Chris Heilmann',
  'Knowledge is power. - Francis Bacon',
  'The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb',
  "Your limitation—it's only your imagination.",
  'Push yourself, because no one else is going to do it for you.',
  'Great things never come from comfort zones.',
  'Dream it. Wish it. Do it.',
  "Success doesn't just find you. You have to go out and get it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  'Dream bigger. Do bigger.',
  "Don't stop when you're tired. Stop when you're done.",
  'Wake up with determination. Go to bed with satisfaction.',
  'Do something today that your future self will thank you for.',
  'Little things make big days.',
  "It's going to be hard, but hard does not mean impossible.",
  "Don't wait for opportunity. Create it.",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
  'The key to success is to focus on goals, not obstacles.',
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];

export function InspirationalQuote() {
  const [currentQuote, setCurrentQuote] = useState('');

  // 获取随机名言
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    return inspirationalQuotes[randomIndex];
  };

  // 组件挂载时设置初始名言，并启动定时器
  useEffect(() => {
    // 设置初始名言
    setCurrentQuote(getRandomQuote());

    // 每10秒自动切换名言
    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 10000); // 10秒 = 10000毫秒

    // 清理定时器
    return () => clearInterval(interval);
  }, []);

  // 点击刷新名言
  const refreshQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <div className="flex items-center space-x-2 max-w-4xl">
      <button
        onClick={refreshQuote}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-purple-50 hover:bg-purple-100 dark:bg-purple-950 dark:hover:bg-purple-900 transition-all duration-200 group max-w-full"
        title="Click for a new quote"
      >
        <Quote className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-200 flex-shrink-0" />
        <span className="text-xs text-purple-700 dark:text-purple-300 font-medium line-clamp-1 flex-1 text-left">
          {currentQuote || 'Loading inspiration...'}
        </span>
      </button>
    </div>
  );
}
