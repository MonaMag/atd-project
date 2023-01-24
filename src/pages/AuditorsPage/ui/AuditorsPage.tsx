import React from 'react';
import cls from './AuditorsPage.module.css';
import { Page } from '../../../widgets/Page/Page';
import { Collapse } from 'antd';
import { classNames } from '../../../shared/classNames/classNames';

interface AuditorPageProps {
    className?: string;
}

const categories = [
    {
        name: 'Пол',
        border: '2px dashed blue',
        children: ['жен', 'муж'],
    },
    {
        name: 'Возраст',
        border: '1px solid red',
        children: ['18', '28'],
    },
    {
        name: 'География',
        border: '1px solid red',
        children: ['Москва', 'Питер'],
    },
    {
        name: 'Соц сети',
        border: '1px solid red',
        children: ['Вконтакте', 'Одноклассники', 'Facebook'],
    },
];

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
                {categories.map((category, i) => (
                    <>
                        <Collapse
                            className={cls.collapseContainer}
                            expandIconPosition="start"
                        >
                            <Collapse.Panel
                                key={i.toString()}
                                header={
                                    <div className={cls.collapseHeader}>
                                        {category.name + ':'}
                                    </div>
                                }
                                className={cls.collapsePanel}
                            >
                                {category.children.map((option) => (
                                    <p key={option}>{option}</p>
                                ))}
                            </Collapse.Panel>
                        </Collapse>
                    </>
                ))}
            </div>
        </Page>
    );
};

export default AuditorsPage;
