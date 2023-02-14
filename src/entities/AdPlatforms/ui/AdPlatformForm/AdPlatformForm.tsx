import React from 'react';
import { classNames } from '../../../../shared/classNames/classNames';
import { CloseOutlined } from '@ant-design/icons';
import { ConfigProvider, Select } from 'antd';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '../../../../shared/ui/Button/Button';
import cls from './AdPlatformForm.module.css';

const { Option } = Select;

interface AdPlatformFormProps {
    className?: string;
    onClose: () => void;
}

const data = [
    { value: 'mytarget', title: 'MyTarget' },
    { value: 'mytarget2', title: 'MyTarget2' },
    { value: 'mytarget3', title: 'MyTarget3' },
];

export const AdPlatformForm: React.FC<AdPlatformFormProps> = ({
    className,
    onClose,
}) => {
    const onCancel = () => {
        onClose();
    };

    return (
        <div className={classNames(cls.adPlatformForm, {}, [className])}>
            <div className={cls.header}>
                <p className={cls.headerTitle}>
                    Данные аккаунта
                    <br /> рекламной площадки
                </p>
                <CloseOutlined className={cls.closeIcon} onClick={onCancel} />
            </div>
            <form>
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
                            <label
                                htmlFor="platform"
                                className={cls.inputLabel}
                            >
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
                                            <Option value={el.value}>
                                                {el.title}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label
                                htmlFor="accountId"
                                className={cls.inputLabel}
                            >
                                ID аккаунта
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="accountId"
                                    type="text"
                                    className={cls.input}
                                    placeholder={'Введите ID аккаунта'}
                                />
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="comment" className={cls.inputLabel}>
                                Комментарий
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="comment"
                                    type="text"
                                    className={cls.input}
                                    placeholder={'Введите наименование РП'}
                                />
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
            </form>
        </div>
    );
};
