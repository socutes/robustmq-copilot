import { useNavigate, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean;
}

export default function GeneralError({ className, minimal = false }: GeneralErrorProps) {
  const { t } = useTranslation('errors');
  const navigate = useNavigate();
  const { history } = useRouter();
  return (
    <div className={cn('h-svh w-full', className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        {!minimal && <h1 className="text-[7rem] font-bold leading-tight">{t('server_error_code')}</h1>}
        <span className="font-medium">{t('server_error_title')} {`:')`}</span>
        <p className="text-center text-muted-foreground">
          {t('server_error_desc')}
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => history.go(-1)}>
              {t('go_back')}
            </Button>
            <Button onClick={() => navigate({ to: '/' })}>{t('back_to_home')}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
