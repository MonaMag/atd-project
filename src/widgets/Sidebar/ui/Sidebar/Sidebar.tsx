import React, { useCallback, useState } from 'react';
import { classNames } from '../../../../shared/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '../../../../shared/ui/Button/Button';
import logo from '../../../../shared/assets/logo/Logo.png';
import { ReactComponent as ProfileIcon } from '../../../../shared/assets/icons/profile.svg';
import { ReactComponent as UserIcon } from '../../../../shared/assets/icons/sheets.svg';
import { ReactComponent as AuditorsIcon } from '../../../../shared/assets/icons/settings_segment.svg';
import { ReactComponent as MagazineIcon } from '../../../../shared/assets/icons/magazine.svg';
import cls from './Sidebar.module.css';
import { Modal } from '../../../../shared/ui/Modal/Modal';
import { DescriptionForm } from '../../../../feature/segmentDescription/DescriptionForm';
import { DelegationModal } from '../../../../feature/delegation/DelegationModal';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isCreateModal, setIsCreateModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsCreateModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsCreateModal(false);
    }, []);

    const handleEstimateVolume = () => {
        onShowModal();
    };

    const handleResetFilters = () => {
        console.log('ResetFilters');
    };

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
                    theme={ButtonTheme.BACKGROUND}
                    onClick={onShowModal}
                    className={cls.btn}
                    size={ButtonSize.XS}
                >
                    Описание сегмента
                </Button>
                <Modal
                    className={classNames('', {}, [className])}
                    isOpen={isCreateModal}
                    onClose={onCloseModal}
                >
                    <DescriptionForm onClose={onCloseModal} />
                </Modal>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.btn}
                    onClick={handleEstimateVolume}
                >
                    Оценить объем
                </Button>
                <DelegationModal />
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.clearFilter}
                    onClick={handleResetFilters}
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
