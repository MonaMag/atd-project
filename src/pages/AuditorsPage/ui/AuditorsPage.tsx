import React, { useEffect } from 'react';
import cls from './AuditorsPage.module.css';
import { Page } from '../../../widgets/Page/Page';
import { classNames } from '../../../shared/classNames/classNames';
import { getData } from '../../../entities/Category/model/data/data';
import CategoryList from '../../../entities/Category/ui/CategoryList';

interface AuditorPageProps {
    className?: string;
}

const categories = getData();

const AuditorsPage: React.FC<AuditorPageProps> = ({ className }) => {
    useEffect(() => {}, []);

    return (
        <Page className={classNames(cls.auditorsPage, {}, [className])}>
            <div className={cls.header}>Аудитория</div>
            <div className={cls.auditorsContent}>
                {categories.map((category, index) => {
                    return <CategoryList key={index} category={category} />;
                })}
            </div>
        </Page>
    );
};

export default AuditorsPage;
