import cls from './PageError.module.css';
import { Button } from '../../shared/ui/Button/Button';
import { classNames } from '../../shared/classNames/classNames';

interface ErrorPageProps {
  className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{'Произошла непредвиденная ошибка'}</p>
      <Button onClick={reloadPage}>{'Обновить страницу'}</Button>
    </div>
  );
};
