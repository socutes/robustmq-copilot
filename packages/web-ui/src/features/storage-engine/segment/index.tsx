import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CommonLayout } from '@/components/layout/common-layout';
import { Layers } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SegmentList from './list';

export default function Segment() {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [shardName, setShardName] = useState('');

  const handleQuery = () => {
    setShardName(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleQuery();
    }
  };

  return (
    <CommonLayout>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
            <Layers className="h-3 w-3 text-white" />
          </div>
          <h2 className="text-lg font-bold text-purple-600">{t('segment')}</h2>
        </div>
      </div>
      <div className="mb-4 flex items-center space-x-2">
        <Input
          className="w-[320px] h-8 text-sm"
          placeholder={t('select_shard_placeholder')}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button size="sm" onClick={handleQuery}>
          {t('search')}
        </Button>
      </div>
      <SegmentList shardName={shardName} />
    </CommonLayout>
  );
}
