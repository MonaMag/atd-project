import { Link, LinkProps, useMatch } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.css';
import { classNames } from '../../classNames/classNames';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    to: string;
}

//const setActive = ({ isActive }) => (isActive ? cls.active : undefined);

export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children, ...otherProps } = props;

    const match = useMatch(to);

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            style={{
                background: match ? 'var(--select-bg-color)' : '',
            }}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
