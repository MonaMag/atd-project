import { memo, ReactNode } from 'react';
import cls from './Page.module.css';
import { classNames } from '../../shared/classNames/classNames';

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;

    return (
        <main className={classNames(cls.Page, {}, [className])}>
            <div className={cls.pageContent}>{children}</div>
        </main>
    );
});
