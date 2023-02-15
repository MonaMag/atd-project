import React, { useCallback, useState } from 'react';
import { AdPlatformScheme } from '../model/types/adPlatforms';
import { ColumnsType } from 'antd/es/table';
import { Space, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { classNames } from '../../../shared/classNames/classNames';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { UpdatePlatformForm } from '../../../feature/UpdatePlatformModal/UpdatePlatformForm';

interface AdPlatformListProps {
  className?: string;
}

export const AdPlatformList = ({ className }: AdPlatformListProps) => {
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');

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
      render: ({ id, key }: { id: string; key: string }) => (
        <Space size={'middle'}>
          <EditOutlined onClick={() => handleOpenUpdateModal(id)} />
          <Modal
            className={classNames('', {}, [className])}
            isOpen={showUpdateModal}
            onClose={onCloseUpdateModal}
          >
            <UpdatePlatformForm onClose={onCloseUpdateModal} />
          </Modal>
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
      platform: 'MyTarget2',
      accountId: '123456789',
      date: '14.04.2023',
      comment: 'Рабочий ЛК',
    },
    {
      key: '3',
      platform: 'MyTarget3',
      accountId: '123456789',
      date: '16.06.2023',
      comment: 'Рабочий ЛК',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: AdPlatformScheme[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: AdPlatformScheme) => ({
      disabled: record.platform === 'Disabled User',
      name: record.platform,
    }),
  };

  const handleOpenUpdateModal = useCallback((id: string) => {
    setShowUpdateModal(true);
    setCurrentId(id);
  }, []);

  const onCloseUpdateModal = useCallback(() => {
    setShowUpdateModal(false);
  }, []);

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
