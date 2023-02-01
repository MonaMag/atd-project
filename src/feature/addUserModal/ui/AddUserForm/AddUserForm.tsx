import React, { memo, useEffect } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from '../../../../shared/classNames/classNames';
import { useFormik } from 'formik';
import { UserRole } from '../../../../entities/User';
import { CloseOutlined } from '@ant-design/icons';
import { ConfigProvider, Select, theme } from 'antd';
import cls from './AddUserForm.module.css';

const { Option } = Select;

export interface UserFormProps {
    className?: string;
    onClose: () => void;
}

export type FormikErrorType = {
    username?: string;
    group?: string;
    email?: string;
    phone?: string;
    status?: string;
    company?: string;
    inn?: string;
};
const AddUserForm = memo(({ className, onClose }: UserFormProps) => {
    const { token } = theme.useToken();
    const onCancel = () => {
        onClose();
    };

    console.log(token);

    const formik = useFormik({
        initialValues: {
            username: '',
            group: '',
            email: '',
            phone: '',
            status: 'active',
            company: '',
            inn: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.username) {
                errors.username = 'Введите фамилию, имя и отчество';
            } else if (!/^[а-яА-ЯёЁ\s-]+$/i.test(values.username)) {
                errors.username = 'Введите корректные фамилию, имя и отчество';
            }

            if (!values.group) {
                errors.group = 'Группа не выбрана';
            }

            if (!values.email) {
                errors.email = 'Введите email-адрес';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Введите корректный email-адрес';
            }

            if (!values.phone) {
                errors.phone = 'Введите номер телефона';
            } else if (!/^7\d{10}$/.test(String(values.phone))) {
                errors.phone = 'Введите номер в формате 7xxxxxxxxxx';
            }

            if (!values.status) {
                errors.status = 'Статус не выбран';
            }

            if (!values.company) {
                errors.company = 'Введите наименование компании';
            } else if (!/^[а-яА-ЯёЁ\s-]+$/i.test(values.company)) {
                errors.company = '';
            }

            if (!values.inn) {
                errors.inn = 'Введите ИНН';
            } else if (!/^[0-9]{10}$/.test(String(values.inn))) {
                errors.inn = 'Должно быть 10 символов';
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values);
            onClose();
            formik.resetForm();
        },
    });

    useEffect(() => {
        if (
            formik.values.group === UserRole.ADMIN ||
            formik.values.group === UserRole.PRESALE
        ) {
            formik.values.company = 'Tele2';
            formik.values.inn = '1234567890';
        }
        console.log('VALUES', formik.values);
    }, [formik.values]);

    useEffect(() => {
        console.log('ERRORS', formik.errors);
    }, [formik.errors]);

    console.log('FORMIC', formik);

    return (
        <div className={classNames(cls.UserForm, {}, [className])}>
            <div className={cls.header}>
                <p>Данные пользователя</p>
                <CloseOutlined className={cls.closeIcon} onClick={onCancel} />
            </div>
            <form noValidate onSubmit={formik.handleSubmit}>
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
                                htmlFor="username"
                                className={cls.inputLabel}
                            >
                                ФИО
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="username"
                                    type="text"
                                    className={
                                        formik.touched.username &&
                                        formik.errors.username
                                            ? `${cls.error} ${cls.input}`
                                            : cls.input
                                    }
                                    placeholder={
                                        'Введите фамилию, имя и отчество'
                                    }
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.touched.username &&
                                formik.errors.username ? (
                                    <div className={cls.warning}>
                                        {formik.errors.username}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="group" className={cls.inputLabel}>
                                Группа
                            </label>
                            <div className={cls.field}>
                                <Select
                                    id="group"
                                    size={'large'}
                                    placeholder={'Выберите группу'}
                                    className={
                                        formik.touched.group &&
                                        formik.errors.group
                                            ? `${cls.error} ${cls.select}`
                                            : cls.select
                                    }
                                    value={formik.values.group}
                                    onChange={(value) => {
                                        formik.setFieldValue('group', value);
                                    }}
                                    onBlur={formik.handleBlur}
                                    onSelect={formik.handleChange}
                                >
                                    <Option value="">Выберите группу</Option>
                                    <Option value="admin">Администратор</Option>
                                    <Option value="presale">Пресейл</Option>
                                    <Option value="user">Пользовватель</Option>
                                </Select>
                                {formik.touched.group && formik.errors.group ? (
                                    <div className={cls.warning}>
                                        {formik.errors.group}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="phone" className={cls.inputLabel}>
                                Телефон
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="phone"
                                    type="text"
                                    className={
                                        formik.touched.phone &&
                                        formik.errors.phone
                                            ? `${cls.error} ${cls.input}`
                                            : cls.input
                                    }
                                    placeholder={'7xxxxxxxxxx'}
                                    autoComplete="phone"
                                    {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className={cls.warning}>
                                        {formik.errors.phone}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="email" className={cls.inputLabel}>
                                Email
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="email"
                                    type="text"
                                    className={
                                        formik.touched.email &&
                                        formik.errors.email
                                            ? `${cls.error} ${cls.input}`
                                            : cls.input
                                    }
                                    placeholder={'Веедите электронную почту'}
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className={cls.warning}>
                                        {formik.errors.email}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="status" className={cls.inputLabel}>
                                Статус
                            </label>
                            <div className={cls.field}>
                                <Select
                                    id="status"
                                    size={'large'}
                                    defaultValue={'active'}
                                    className={
                                        formik.touched.status &&
                                        formik.errors.status
                                            ? `${cls.error} ${cls.select}`
                                            : cls.select
                                    }
                                    value={formik.values.status}
                                    onChange={(value) => {
                                        formik.setFieldValue('status', value);
                                    }}
                                    onBlur={formik.handleBlur}
                                    onSelect={formik.handleChange}
                                >
                                    {/*<option value={''}>Не выбрано</option>*/}
                                    <Option value={'active'}>Активный</Option>
                                    <Option value={'inactive'}>
                                        Неактивный
                                    </Option>
                                </Select>
                                {formik.touched.status &&
                                formik.errors.status ? (
                                    <div className={cls.warning}>
                                        {formik.errors.status}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="company" className={cls.inputLabel}>
                                Компания
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="company"
                                    type="text"
                                    disabled={
                                        formik.values.group === 'admin' ||
                                        formik.values.group === 'presale'
                                    }
                                    className={
                                        formik.touched.company &&
                                        formik.errors.company
                                            ? `${cls.error} ${cls.input}`
                                            : cls.input
                                    }
                                    placeholder={'Введите название компании'}
                                    {...formik.getFieldProps('company')}
                                />
                                {formik.touched.company &&
                                formik.errors.company ? (
                                    <div className={cls.warning}>
                                        {formik.errors.company}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className={cls.item}>
                            <label htmlFor="inn" className={cls.inputLabel}>
                                ИНН
                            </label>
                            <div className={cls.field}>
                                <input
                                    id="inn"
                                    type="text"
                                    className={
                                        formik.touched.inn && formik.errors.inn
                                            ? `${cls.error} ${cls.input}`
                                            : cls.input
                                    }
                                    disabled={
                                        formik.values.group === 'admin' ||
                                        formik.values.group === 'presale'
                                    }
                                    placeholder={'Введите ИНН компании'}
                                    {...formik.getFieldProps('inn')}
                                />
                                {formik.touched.inn && formik.errors.inn ? (
                                    <div className={cls.warning}>
                                        {formik.errors.inn}
                                    </div>
                                ) : null}
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
                            Отменить
                        </Button>
                    </div>
                </ConfigProvider>
            </form>
        </div>
    );
});

export default AddUserForm;
