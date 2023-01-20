import React from 'react';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './UsersPage.module.css';
import { AddUserModal } from '../../../feature/addUserModal/ui/AddUserModal/AddUserModal';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

const UsersPage = () => {
    console.log('SPage');
    return (
        <div className={classNames(cls.UsersPage, {}, [])}>
            <div className={cls.btnWrapper}>
                <AddUserModal />
                <Button theme={ButtonTheme.CLEAR} className={cls.btnFilter}>
                    Применить фильтры
                </Button>
            </div>
        </div>
    );
};

export default UsersPage;
