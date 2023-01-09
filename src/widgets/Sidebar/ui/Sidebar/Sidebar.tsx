import React from 'react';
import { classNames } from '../../../../shared/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '../../../../shared/ui/Button/Button';
import cls from './Sidebar.module.css';
import logo from '../../../../shared/assets/logo/Logo.png';
interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.links}>
                <div>
                    <img src={logo} alt="logo" className={cls.logo} />
                </div>
                <AppLink to={'/profile'} className={cls.link}>
                    Профиль
                </AppLink>
                <AppLink to={'/users'} className={cls.link}>
                    Пользователи
                </AppLink>
                <AppLink to={'/'} className={cls.link}>
                    Аудиторные Сегменты
                </AppLink>
                <AppLink to={'/history'} className={cls.link}>
                    История действий
                </AppLink>
            </div>
            <div className={cls.volume}>
                <span className={cls.digit}>44 756 256</span>
                <Button theme={ButtonTheme.BACKGROUND_BLUE}>
                    Оценить объем
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.clearFilter}
                >
                    Сбросить фильтры
                </Button>
            </div>
            <div className={cls.logout}>
                <Button theme={ButtonTheme.CLEAR_RED} size={ButtonSize.S}>
                    {'Выйти из аккаунта'}
                </Button>
            </div>
        </div>
    );
};
