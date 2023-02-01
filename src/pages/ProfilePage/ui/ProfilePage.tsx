import React from 'react';
import { Page } from '../../../widgets/Page/Page';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './Profilepage.module.css';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <Page className={classNames(cls.profilePage, {}, [className])}>
            PROFILE PAGE
        </Page>
    );
};

export default ProfilePage;
