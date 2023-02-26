import { useSelector } from 'react-redux';
import React, { memo } from 'react';
import { getLoginIsLoading } from '../model/selectors/getLoginState';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './LoginForm.module.css';
import { Input } from 'antd';
import { useFormik } from 'formik';
import { ReactComponent as LoginIcon } from '../../../shared/assets/icons/login.svg';

interface LoginFormProps {
  className?: string;
}

type FormikErrorType = {
  username?: string;
  password?: string;
};

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const isLoading = useSelector(getLoginIsLoading);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.username) {
        errors.username = 'Введите логин';
      } else if (!/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/i.test(values.username)) {
        errors.username = 'Неверно указан логин';
      }
      if (!values.password) {
        errors.password = 'Введите пароль';
      } else if (values.password.length < 8) {
        errors.password = 'Минимум 8 символов';
      }
      return errors;
    },
    onSubmit: (values) => {
      // dispatch(loginByUsername(values));
      console.log('Login values', values);
      formik.resetForm();
    },
  });

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <div className={cls.headerWrapper}>
        <p>{'Войти в Tele2 ATD'} </p>
      </div>

      <form onSubmit={formik.handleSubmit} className={cls.item}>
        <div className={cls.inputWrapper}>
          <div className={cls.field}>
            <Input
              id={'username'}
              type="text"
              className={cls.input}
              placeholder={'Логин'}
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className={cls.warning}>{formik.errors.username}</div>
            ) : (
              <div className={cls.emptyWarning}></div>
            )}
          </div>
          <div className={cls.field}>
            <Input
              type="text"
              className={cls.input}
              placeholder={'Пароль'}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={cls.warning}>{formik.errors.password}</div>
            ) : (
              <div className={cls.emptyWarning}></div>
            )}
          </div>
        </div>

        <div className={cls.btnWrapper}>
          <Button
            type={'submit'}
            theme={ButtonTheme.BACKGROUND}
            className={cls.loginBtn}
            disabled={isLoading}
          >
            <div className={cls.btnContent}>
              <LoginIcon className={cls.loginIcon} />
              {'Войти'}
            </div>
          </Button>
          <Button
            type={'submit'}
            theme={ButtonTheme.CLEAR}
            className={cls.loginBtn}
            disabled={isLoading}
          >
            <LoginIcon className={cls.loginIcon} />
            {'Не помню пароль'}
          </Button>
        </div>
      </form>
    </div>
  );
});
