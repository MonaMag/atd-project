import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { Platform } from '../model/types/platforms';
import { ColumnsType } from 'antd/es/table';
import { Input, Table } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { fetchPlatforms } from '../model/services/fetchPlatforms';
import { getPlatforms } from '../../../feature/AddPlatformModal/model/selectors/getPlatforms';

interface PlatformListProps {
  className?: string;
  onDisabled: (isDisabled: boolean) => void;
  onSelectedRows: (selectedRows: Platform[]) => void;
}

export const PlatformList = ({ onDisabled, onSelectedRows }: PlatformListProps) => {
  const dispatch = useAppDispatch();
  const platforms = useSelector(getPlatforms);

  const [dataSource, setDataSource] = useState<Platform[]>(platforms);
  const [editingKey, setEditingKey] = useState<string>('');
  const [comment, setComment] = useState<string | undefined>('');

  const isEditing = (record: Platform) => record.key === editingKey;

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  }, []);

  const handleUpdateComment = (key: React.Key, record: Platform) => {
    setComment(record.comment);
    const updateDataSource = [...dataSource];
    const index = updateDataSource.findIndex((item) => key === item.key);
    const item = updateDataSource[index];
    updateDataSource.splice(index, 1, { ...item, comment: comment });
    setDataSource(updateDataSource);
    console.log(updateDataSource);
    setEditingKey('');
  };

  const onPressEnter = (e: KeyboardEvent<HTMLDivElement>, key: React.Key, record: Platform) => {
    if (e.key === 'Enter') {
      handleUpdateComment(key, record);
    }
  };

  const columns: ColumnsType<Platform> = [
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
              onBlur={() => handleUpdateComment(record.key, record)}
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
      render: (_, record: Platform) => {
        const editable = isEditing(record);
        return !editable ? (
          <EditOutlined
            onClick={() => {
              setEditingKey(record.key);
              setComment(record.comment);
            }}
          />
        ) : (
          <SaveOutlined onClick={() => handleUpdateComment(record.key, record)} />
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Platform[]) => {
      onSelectedRows(selectedRows);
      onDisabled(!Boolean(selectedRows.length));
      console.log('selectedRows: ', selectedRows);
    },
  };

  useEffect(() => {
    dispatch(fetchPlatforms());
  }, [dispatch]);

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
