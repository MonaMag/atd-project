import React from 'react';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './UsersPage.module.css';
import { AddUserModal } from '../../../feature/addUserModal/ui/AddUserModal/AddUserModal';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { Page } from '../../../widgets/Page/Page';

const UsersPage = () => {
    console.log('SPage');
    return (
        <Page className={classNames(cls.usersPage, {}, [])}>
            <div className={cls.wrapper}>
                <AddUserModal />
                <Button theme={ButtonTheme.CLEAR} className={cls.btnFilter}>
                    Применить фильтры
                </Button>
            </div>
        </Page>
    );
};

export default UsersPage;
