import { memo, useEffect } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AddUserForm.module.css';
import { classNames } from '../../../../shared/classNames/classNames';
import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch';
import { useFormik } from 'formik';

export interface UserFormProps {
    className?: string;
    onClose: () => void;
}

type FormikErrorType = {
    username?: string;
    group?: string;
    email?: string;
    phone?: string;
    status?: string;
    company?: string;
    inn?: string;
};

const AddUserForm = memo(({ className, onClose }: UserFormProps) => {
    const dispatch = useAppDispatch();

    const onCancel = () => {
        onClose();
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            group: '',
            email: '',
            phone: '',
            status: '',
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
            // formik.resetForm();
        },
    });

    /*   function validateUsername(value: any) {
        let error;
        if (!value) {
            error = 'Введите фамилию, имя и отчество';
        } else if (!/^[а-яА-ЯёЁ\s-]+$/i.test(value)) {
            error = 'Введите корректные фамилию, имя и отчество';
        }
        return error;
    }*/
    useEffect(() => {
        if (
            formik.values.group === 'admin' ||
            formik.values.group === 'presale'
        ) {
            formik.values.company = 'Tele2';
            formik.values.inn = '1234567891';
        }
        console.log('VALUES', formik.values);
    }, [formik.values.group]);

    useEffect(() => {
        console.log('ERRORS', formik.errors);
    }, [formik.errors]);

    return (
        <div className={classNames(cls.UserForm, {}, [className])}>
            <div className={cls.header}>Данные пользователя</div>
            <form noValidate onSubmit={formik.handleSubmit}>
                <div className={cls.inputWrapper}>
                    <div className={cls.item}>
                        <label htmlFor="username" className={cls.inputLabel}>
                            ФИО
                        </label>
                        <div className={cls.field}>
                            <input
                                id="username"
                                type="text"
                                className={
                                    formik.errors.phone
                                        ? `${cls.error} ${cls.input}`
                                        : cls.input
                                }
                                placeholder={'Введите фамилию, имя и отчество'}
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
                            <select
                                id="group"
                                required
                                className={
                                    formik.errors.phone
                                        ? `${cls.error} ${cls.input}`
                                        : cls.input
                                }
                                placeholder={'Выберите пункт из списка'}
                                {...formik.getFieldProps('group')}
                            >
                                <option value={''}>Не выбрано</option>
                                <option value={'admin'}>Администратор</option>
                                <option value={'presale'}>Пресейл</option>
                                <option value={'user'}>Пользовватель</option>
                            </select>
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
                                    formik.errors.phone
                                        ? `${cls.error} ${cls.input}`
                                        : cls.input
                                }
                                placeholder={'7XXXXXXXXXX'}
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
                            <select
                                id="status"
                                className={
                                    formik.errors.status
                                        ? `${cls.error} ${cls.input}`
                                        : cls.input
                                }
                                placeholder={'Выберите пункт из списка'}
                                {...formik.getFieldProps('status')}
                            >
                                <option value={''}>Не выбрано</option>
                                <option value={'active'}>Активный</option>
                                <option value={'inactive'}>Неактивный</option>
                            </select>
                            {formik.touched.status && formik.errors.status ? (
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
                                disabled={formik.values.group === 'admin'}
                                className={
                                    formik.errors.company
                                        ? `${cls.error} ${cls.input}`
                                        : cls.input
                                }
                                placeholder={'Введите название компании'}
                                {...formik.getFieldProps('company')}
                            />
                            {formik.touched.company && formik.errors.company ? (
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
                                    formik.errors.inn
                                        ? `${cls.error} ${cls.input}`
                                        : cls.input
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
            </form>
        </div>
    );
});

export default AddUserForm;
