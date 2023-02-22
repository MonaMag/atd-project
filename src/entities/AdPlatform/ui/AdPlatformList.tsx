import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { AdPlatform } from '../model/types/adPlatforms';
import { ColumnsType } from 'antd/es/table';
import { Input, Table } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getAddPlatforms } from '../../../feature/AddPlatformModal/model/selectors/addPlatform';

interface AdPlatformListProps {
  className?: string;
  onDisabled: (isDisabled: boolean) => void;
  onSelectedRows: (selectedRows: AdPlatform[]) => void;
}

export const AdPlatformList = ({ className, onDisabled, onSelectedRows }: AdPlatformListProps) => {
  const platforms = useSelector(getAddPlatforms);
  const data: AdPlatform[] = [
    {
      key: '1',
      platform: 'MyTarget',
      accountId: '123456789',
      comment: 'Рабочий ЛК',
    },
    {
      key: '2',
      platform: 'MyTarget2',
      accountId: '123456789',
      comment: 'Рабочий ЛК',
    },
    {
      key: '3',
      platform: 'MyTarget3',
      accountId: '123456789',
      comment: 'Рабочий ЛК',
    },
  ];

  const [dataSource, setDataSource] = useState<AdPlatform[]>(data);
  const [editingKey, setEditingKey] = useState<string>('');
  const [comment, setComment] = useState<string | undefined>('');
  //const [selectedRows, setSelectedRows] = useState<AdPlatformScheme[]>([]);

  const isEditing = (record: AdPlatform) => record.key === editingKey;

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  }, []);

  const onFinish = (key: React.Key, record: AdPlatform) => {
    setComment(record.comment);
    const updateDataSource = [...dataSource];
    const index = updateDataSource.findIndex((item) => key === item.key);
    const item = updateDataSource[index];
    updateDataSource.splice(index, 1, { ...item, comment: comment });
    setDataSource(updateDataSource);
    console.log(updateDataSource);
    setEditingKey('');
  };

  const onPressEnter = (e: KeyboardEvent<HTMLDivElement>, key: React.Key, record: AdPlatform) => {
    if (e.key === 'Enter') {
      onFinish(key, record);
    }
  };

  const columns: ColumnsType<AdPlatform> = [
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
      render: (text, record) => {
        if (record.key === editingKey) {
          console.log(comment);
          return (
            <Input
              onChange={onChange}
              autoFocus
              onBlur={() => onFinish(record.key, record)}
              onKeyPress={(e) => onPressEnter(e, record.key, record)}
              value={comment}
            />
          );
        } else {
          return <p style={{ marginLeft: 10 }}>{text}</p>;
        }
      },
    },
    {
      key: 'action',
      render: (_, record: AdPlatform) => {
        const editable = isEditing(record);
        return !editable ? (
          <EditOutlined
            onClick={() => {
              setEditingKey(record.key);
              setComment(record.comment);
            }}
          />
        ) : (
          <SaveOutlined onClick={() => onFinish(record.key, record)} />
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: AdPlatform[]) => {
      onSelectedRows(selectedRows);
      onDisabled(!Boolean(selectedRows.length));
      console.log('selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: AdPlatform) => ({
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
        dataSource={platforms}
        columns={columns}
        rowClassName="editable-row"
      />
    </>
  );
};
