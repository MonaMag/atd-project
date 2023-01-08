import { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.css';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';
import { classNames } from '../../../../shared/classNames/classNames';
import { getUserAuthData } from '../../../../entities/User';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink to={item.path} className={classNames(cls.item, {})}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
});
