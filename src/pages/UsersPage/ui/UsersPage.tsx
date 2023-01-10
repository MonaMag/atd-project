import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { AddUserModal } from '../../../feature/addUserModal/ui/AddUserModal/AddUserModal';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './UsersPage.module.css';

const UsersPage = () => {
    const [isCreateModal, setIsCreateModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsCreateModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsCreateModal(false);
    }, []);

    return (
        <div className={classNames(cls.UsersPage, {}, [])}>
            <div className={cls.btnWrapper}>
                <Button theme={ButtonTheme.BACKGROUND} onClick={onShowModal}>
                    Создать
                </Button>
                <AddUserModal isOpen={isCreateModal} onClose={onCloseModal} />
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onShowModal}
                    className={cls.btnFilter}
                >
                    Применить фильтры
                </Button>
            </div>
        </div>
    );
};

export default UsersPage;
