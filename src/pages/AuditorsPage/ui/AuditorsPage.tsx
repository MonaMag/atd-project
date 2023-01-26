import React from 'react';
import cls from './AuditorsPage.module.css';
import { Page } from '../../../widgets/Page/Page';
import { Collapse } from 'antd';
import { classNames } from '../../../shared/classNames/classNames';
import { categories } from '../../../entities/Category/data/data';

interface AuditorPageProps {
    className?: string;
}

const AuditorsPage = ({ className }: AuditorPageProps) => {
    // const { token } = theme.useToken();

    /*  const panelStyle = {
        marginBottom: 1,
        background: token.colorBgContainer,
        borderRadius: token.borderRadiusLG,
        colorBgLayout: 'red',
        colorBgContainer: 'red',
    };*/
    /*style={{ ['--header-border']: category.border }}*/

    return (
        <Page className={classNames(cls.auditorsPage, {}, [className])}>
            <div className={cls.header}>Аудитория</div>
            <div>
                {categories.map((category, index) => (
                    <>
                        <Collapse
                            className={cls.collapseContainer}
                            expandIconPosition="end"
                        >
                            <Collapse.Panel
                                key={index.toString()}
                                header={
                                    <div className={cls.collapseHeader}>
                                        {category.title + ':'}
                                    </div>
                                }
                                className={cls.collapsePanel}
                            >
                                <div className={cls.panelContent}>
                                    <div className={cls.category}>tree</div>
                                    <div className={cls.choice}>choice</div>
                                </div>
                            </Collapse.Panel>
                        </Collapse>
                    </>
                ))}
            </div>
        </Page>
    );
};

export default AuditorsPage;
