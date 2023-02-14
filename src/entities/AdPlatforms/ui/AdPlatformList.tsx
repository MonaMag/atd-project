import React from 'react';
import { AdPlatformScheme } from '../module/types/adPlatforms';
import { ColumnsType } from 'antd/es/table';
import { Space, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';

interface AdPlatformListProps {
    className?: string;
}

export const AdPlatform: React.FC<AdPlatformListProps> = ({ className }) => {
    const columns: ColumnsType<AdPlatformScheme> = [
        {
            title: 'Рекламная площадка',
            dataIndex: 'platform',
            key: 'platform',
        },
        {
            title: 'ID аккаунта',
            dataIndex: 'id',
            key: 'id',
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
                dataSource={[
                    {
                        key: 'platform',
                        platform: 'string',
                        id: 1,
                        date: 'string',
                        comment: 'string',
                    },
                ]}
                columns={columns}
            />
        </>
    );
};
