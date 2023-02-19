import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { AdPlatformScheme } from '../model/types/adPlatforms';
import { ColumnsType } from 'antd/es/table';
import { Form, Input, Table } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

interface AdPlatformListProps {
  className?: string;
  onDisabled: (isDisabled: boolean) => void;
  onSelectedRows: (selectedRows: AdPlatformScheme[]) => void;
}

export const AdPlatformList = ({ className, onDisabled, onSelectedRows }: AdPlatformListProps) => {
  const [form] = Form.useForm();
  const data: AdPlatformScheme[] = [
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

  const [dataSource, setDataSource] = useState<AdPlatformScheme[]>(data);
  const [editingKey, setEditingKey] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  //const [selectedRows, setSelectedRows] = useState<AdPlatformScheme[]>([]);

  const isEditing = (record: AdPlatformScheme) => record.key === editingKey;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };
  const onFinish = (key: React.Key) => {
    const updateDataSource = [...dataSource];
    const index = updateDataSource.findIndex((item) => key === item.key);
    const item = updateDataSource[index];
    updateDataSource.splice(index, 1, { ...item, comment: comment });
    setDataSource(updateDataSource);
    console.log(updateDataSource);
    setEditingKey('');
  };
  const onPressEnter = (e: KeyboardEvent<HTMLDivElement>, key: React.Key) => {
    if (e.key === 'Enter') {
      onFinish(key);
    }
  };

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
      render: (text, record) => {
        if (record.key === editingKey) {
          return (
            <Form.Item
              key={record.key}
              name={'comment'}
              style={{ marginBottom: 0 }}
              rules={[
                {
                  max: 20,
                  message: 'Длина не должна превышать 20 символов',
                },
              ]}
            >
              <Input
                onChange={onChange}
                onBlur={() => onFinish(record.key)}
                onKeyPress={(e) => onPressEnter(e, record.key)}
              />
            </Form.Item>
          );
        } else {
          return (
            <p style={{ marginLeft: 10 }} onDoubleClick={() => setEditingKey(record.key)}>
              {text}
            </p>
          );
        }
      },
    },
    {
      key: 'action',
      render: (_, record: AdPlatformScheme) => {
        const editable = isEditing(record);
        return !editable ? (
          <EditOutlined
            onClick={() => {
              form.setFieldValue('comment', record.comment);
              setEditingKey(record.key);
            }}
          />
        ) : (
          <SaveOutlined onClick={() => onFinish(record.key)} />
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: AdPlatformScheme[]) => {
      onSelectedRows(selectedRows);
      onDisabled(!Boolean(selectedRows.length));
      console.log('selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: AdPlatformScheme) => ({
      disabled: record.platform === 'Disabled User',
      name: record.platform,
    }),
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
          rowClassName="editable-row"
        />
      </Form>
    </>
  );
};
