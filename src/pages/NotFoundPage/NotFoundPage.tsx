import cls from './NotFoundPage.module.css';
import { classNames } from '../../shared/classNames/classNames';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {'Страница не найдена'}
        </div>
    );
};
