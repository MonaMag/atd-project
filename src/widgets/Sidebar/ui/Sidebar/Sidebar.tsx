import React from 'react';
import { classNames } from '../../../../shared/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import logo from '../../../../shared/assets/logo/Logo.png';
import { ReactComponent as ProfileIcon } from '../../../../shared/assets/icons/profile.svg';
import { ReactComponent as UserIcon } from '../../../../shared/assets/icons/sheets.svg';
import { ReactComponent as AuditorsIcon } from '../../../../shared/assets/icons/settings_segment.svg';
import { ReactComponent as MagazineIcon } from '../../../../shared/assets/icons/magazine.svg';
import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.links}>
                <div>
                    <img src={logo} alt="logo" className={cls.logo} />
                </div>
                <AppLink to={'/users'} className={cls.link}>
                    <UserIcon className={cls.sidebarIcon} />
                    <span>Пользователи</span>
                </AppLink>
                <AppLink to={'/'} className={cls.link}>
                    <AuditorsIcon className={cls.sidebarIcon} />
                    Аудитории
                </AppLink>
                <AppLink to={'/history'} className={cls.link}>
                    <MagazineIcon className={cls.sidebarIcon} />
                    История действий
                </AppLink>
            </div>
            <div className={cls.volume}>
                <span className={cls.digit}>44 756 256</span>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.clearFilter}
                >
                    Описание сегмента
                </Button>
                <Button
                    theme={ButtonTheme.BACKGROUND_BLUE}
                    className={cls.blueBtn}
                >
                    Оценить объем
                </Button>
                <Button theme={ButtonTheme.OUTLINE_INVERTED}>
                    Делегировать
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.clearFilter}
                >
                    Сбросить фильтры
                </Button>
            </div>
            <div className={cls.footer}>
                <AppLink to={'/profile'} className={cls.link}>
                    <ProfileIcon className={cls.sidebarIcon} />
                    <span>Профиль</span>
                </AppLink>
            </div>
        </aside>
    );
};
