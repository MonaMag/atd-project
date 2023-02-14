import React from 'react';
import { AdPlatformScheme } from '../module/types/adPlatforms';
import { ColumnsType } from 'antd/es/table';
import { Space, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';

interface AdPlatformListProps {
    className?: string;
}

export const AdPlatformList: React.FC<AdPlatformListProps> = (props) => {
    const columns: ColumnsType<AdPlatformScheme> = [
        {
            title: 'Рекламная площадка',
            dataIndex: 'platform',
            key: 'platform',
        },
        {
            title: 'ID аккаунта',
            dataIndex: 'accountId',
            key: 'accountId',
        },
        {
            title: 'Дата изменения',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Комментарий',
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            key: 'action',
            render: (_, record) => (
                <Space size={'middle'}>
                    <EditOutlined />
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            platform: 'MyTarget',
            accountId: '123456789',
            date: '12.02.2023',
            comment: 'Рабочий ЛК',
        },
        {
            key: '2',
            platform: 'MyTarget',
            accountId: '123456789',
            date: '12.02.2023',
            comment: 'Рабочий ЛК',
        },
        {
            key: '3',
            platform: 'MyTarget',
            accountId: '123456789',
            date: '12.02.2023',
            comment: 'Рабочий ЛК',
        },
    ];
    const rowSelection = {
        onChange: (
            selectedRowKeys: React.Key[],
            selectedRows: AdPlatformScheme[],
        ) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                'selectedRows: ',
                selectedRows,
            );
        },
        getCheckboxProps: (record: AdPlatformScheme) => ({
            disabled: record.platform === 'Disabled User',
            name: record.platform,
        }),
    };
    return (
        <>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                pagination={false}
                dataSource={data}
                columns={columns}
            />
        </>
    );
};
