import { useNavigate, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function NotFoundError() {
  const { t } = useTranslation('errors');
  const navigate = useNavigate();
  const { history } = useRouter();
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">{t('not_found_code')}</h1>
        <span className="font-medium">{t('not_found_title')}</span>
        <p className="text-center text-muted-foreground">
          {t('not_found_desc')}
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => history.go(-1)}>
            {t('go_back')}
          </Button>
          <Button onClick={() => navigate({ to: '/' })}>{t('back_to_home')}</Button>
        </div>
      </div>
    </div>
  );
}
