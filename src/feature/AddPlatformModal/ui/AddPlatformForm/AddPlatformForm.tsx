import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import { classNames } from '../../../../shared/classNames/classNames';
import cls from './AddPlatformForm.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { AdPlatform } from '../../../../entities/AdPlatform/model/types/adPlatforms';
import { useDispatch } from 'react-redux';
import { addPlatformActions } from '../../model/slice/addPlatformSlice';

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
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string>('');
  const [form] = Form.useForm();

  const onCancel = () => {
    onClose();
  };

  const handleOnChange = (value: string) => {
    setSelected(value);
    form.setFieldValue('platform', value);
    console.log('jnCHAHGE', selected);
  };
  /*  const handleOnChange = (value: string) => {
    setSelected(value);
    form.setFieldsValue({ platform: value });
    console.log('jnCHAHGE', value);
  };*/
  const onFinish = (values: AdPlatform) => {
    dispatch(addPlatformActions.addPlatform(values));
    onClose();
    console.log('ONFINISH', values);
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
      <Form name="add-platform" form={form} onFinish={onFinish}>
        <div className={cls.inputWrapper}>
          <Form.Item className={cls.item} name={'platform'} label={'Рекламная площадка'}>
            {/* <label htmlFor="platform" className={cls.inputLabel}>
              Рекламная площадка
            </label>*/}
            <div className={cls.field}>
              <Select
                id="platform"
                placeholder={'Выберите рекламную площадку '}
                className={cls.select}
                onChange={handleOnChange}
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
          </Form.Item>

          <Form.Item className={cls.item} name={'accountId'} label={'ID аккаунта'}>
            {/*<label htmlFor="accountId" className={cls.inputLabel}>
              ID аккаунта
            </label>*/}
            <div className={cls.field}>
              <Input
                id="accountId"
                type="text"
                className={cls.input}
                placeholder={'Введите ID ЛК рекламной площадки'}
              />
            </div>
          </Form.Item>

          <Form.Item className={cls.item} name={'comment'} label={'Комментарий'}>
            {/* <label htmlFor="comment" className={cls.inputLabel}>
              Комментарий
            </label>*/}
            <div className={cls.field}>
              <Input id="comment" type="text" className={cls.input} placeholder={'Комментарий'} />
            </div>
          </Form.Item>
        </div>

        <div className={cls.buttonWrapper}>
          <Form.Item>
            <Button type="submit" className={cls.userBtn} theme={ButtonTheme.BACKGROUND}>
              Сохранить
            </Button>
          </Form.Item>
          <Form.Item>
            <Button className={cls.userBtn} onClick={onCancel} theme={ButtonTheme.CLEAR}>
              Отмена
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
