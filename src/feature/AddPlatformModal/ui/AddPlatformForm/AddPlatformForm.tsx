import React from 'react';
import { ConfigProvider, Select, Form } from 'antd';
import { classNames } from '../../../../shared/classNames/classNames';
import cls from './AdPlatformForm.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';

const { Option } = Select;

interface AddPlatformFormProps {
  className?: string;
  onClose: () => void;
}

const data = [
  { value: 'mytarget', title: 'MyTarget' },
  { value: 'mytarget2', title: 'MyTarget2' },
  { value: 'mytarget3', title: 'MyTarget3' },
];

export const AddPlatformForm = ({ onClose }: AddPlatformFormProps) => {
  const [form] = Form.useForm();
  const onCancel = () => {
    onClose();
  };

  return (
    <div className={classNames(cls.adPlatformForm, {}, [])}>
      <div className={cls.header}>
        <p className={cls.headerTitle}>
          Данные аккаунта
          <br /> рекламной площадки
        </p>
        <CloseOutlined className={cls.closeIcon} onClick={onCancel} />
      </div>
      <Form>
        <ConfigProvider
          theme={{
            token: {
              controlHeightLG: 60,
              colorBorder: '#3fcbff',
              colorBorderSecondary: '#3fcbff',
            },
          }}
        >
          <div className={cls.inputWrapper}>
            <div className={cls.item}>
              <label htmlFor="platform" className={cls.inputLabel}>
                Рекламная площадка
              </label>
              <div className={cls.field}>
                <Select
                  id="platform"
                  size={'large'}
                  defaultValue={'mytarget'}
                  className={cls.select}
                >
                  {data.map((el) => {
                    return (
                      <Option key={el.title} value={el.value}>
                        {el.title}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </div>

            <div className={cls.item}>
              <label htmlFor="accountId" className={cls.inputLabel}>
                ID аккаунта
              </label>
              <div className={cls.field}>
                <input
                  id="accountId"
                  type="text"
                  className={cls.input}
                  placeholder={'Введите ID ЛК рекламной площадки'}
                />
              </div>
            </div>

            <div className={cls.item}>
              <label htmlFor="comment" className={cls.inputLabel}>
                Комментарий
              </label>
              <div className={cls.field}>
                <input id="comment" type="text" className={cls.input} placeholder={'Комментарий'} />
              </div>
            </div>
          </div>

          <div className={cls.buttonWrapper}>
            <Button
              type="submit"
              size={ButtonSize.M}
              theme={ButtonTheme.BACKGROUND}
              className={cls.userBtn}
            >
              Сохранить
            </Button>
            <Button
              size={ButtonSize.M}
              theme={ButtonTheme.CLEAR}
              className={cls.userBtn}
              onClick={onCancel}
            >
              Отмена
            </Button>
          </div>
        </ConfigProvider>
      </Form>
    </div>
  );
};
