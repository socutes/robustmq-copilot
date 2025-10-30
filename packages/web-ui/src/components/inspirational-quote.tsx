import { useState, useEffect, useCallback } from 'react';
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

interface FallingLetter {
  id: number;
  left: number;
  animationDuration: number;
  letter: string;
}

export function InspirationalQuote() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [fallingLetters, setFallingLetters] = useState<FallingLetter[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  // 获取随机名言
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    return inspirationalQuotes[randomIndex];
  };

  // 创建掉落字母的函数
  const createFallingLetters = useCallback(() => {
    const letters = ['1', '1', '3', '0', 'Q']; // 可选的掉落元素
    const newLetters: FallingLetter[] = [];
    const count = Math.floor(Math.random() * 3) + 2; // 每次生成 2-4 个字母

    for (let i = 0; i < count; i++) {
      newLetters.push({
        id: Date.now() + Math.random() * 10000 + i, // 使用更随机的 ID
        left: Math.random() * 100, // 0% - 100% 全屏宽度
        animationDuration: Math.random() * 2 + 2, // 2-4 秒
        letter: letters[Math.floor(Math.random() * letters.length)], // 随机选择一个字母
      });
    }

    setFallingLetters(prev => [...prev, ...newLetters]);

    // 4 秒后清除这些字母
    setTimeout(() => {
      setFallingLetters(prev => prev.filter(letter => !newLetters.find(nl => nl.id === letter.id)));
    }, 4000);
  }, []);

  // 组件挂载时设置初始名言
  useEffect(() => {
    setCurrentQuote(getRandomQuote());

    // 每10秒自动切换名言
    const quoteInterval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 10000);

    return () => clearInterval(quoteInterval);
  }, []);

  // 当鼠标悬停时启动持续掉落效果
  useEffect(() => {
    if (!isHovering) return;

    // 启动持续掉落效果 - 每 500ms 生成新的掉落字母
    const fallInterval = setInterval(() => {
      createFallingLetters();
    }, 500);

    // 清理定时器
    return () => {
      clearInterval(fallInterval);
    };
  }, [isHovering, createFallingLetters]);

  // 点击刷新名言
  const refreshQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <>
      {/* 掉落的字母 - 全屏范围 */}
      {fallingLetters.map(letter => (
        <div
          key={letter.id}
          className="fixed text-6xl font-bold text-purple-500 dark:text-purple-400 pointer-events-none z-50"
          style={{
            left: `${letter.left}%`,
            top: '-80px',
            animation: `fall-fullscreen ${letter.animationDuration}s linear`,
            opacity: 0.7,
          }}
        >
          {letter.letter}
        </div>
      ))}

      <div className="flex items-center space-x-2 max-w-4xl">
        <button
          onClick={refreshQuote}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-purple-50 hover:bg-purple-100 dark:bg-purple-950 dark:hover:bg-purple-900 transition-all duration-200 group max-w-full"
          title="Click for a new quote"
        >
          <Quote className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-200 flex-shrink-0" />
          <span className="text-xs text-purple-700 dark:text-purple-300 font-medium line-clamp-1 flex-1 text-left">
            {currentQuote || 'Loading inspiration...'}
          </span>
        </button>

        {/* CSS 动画 */}
        <style>{`
          @keyframes fall-fullscreen {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.7;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) rotate(720deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}
