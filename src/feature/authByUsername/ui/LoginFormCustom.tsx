import { useSelector } from 'react-redux';
import React, { memo, useCallback } from 'react';
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../model/selectors/getLoginState';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { classNames } from '../../../shared/classNames/classNames';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { loginActions } from '../model/slice/loginSlice';
import { loginByUsername } from '../model/services/loginByUsername';
import { Input } from '../../../shared/ui/Input/Input';
import { ReactComponent as LoginIcon } from '../../../shared/assets/icons/login.svg';
import cls from './LoginForm.module.css';

export interface LoginFormProps {
  className?: string;
}

const LoginFormCustom = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
    }
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <div className={cls.headerWrapper}>
        <p>{'Войти в Tele2 ATD'} </p>
      </div>
      <div className={cls.inputWrapper}>
        <Input
          autofocus
          type="text"
          placeholder={'Логин'}
          onChange={onChangeUsername}
          value={username}
        />
        <Input type="text" placeholder={'Пароль'} onChange={onChangePassword} value={password} />
      </div>
      <div className={cls.inputError}>{error && <p>Неверно указан логин или пароль</p>}</div>
      <div className={cls.btnWrapper}>
        <Button
          theme={ButtonTheme.BACKGROUND}
          className={cls.loginBtn}
          disabled={isLoading}
          onClick={onLoginClick}
        >
          <div className={cls.btnContent}>
            <LoginIcon className={cls.loginIcon} />
            {'Войти'}
          </div>
        </Button>
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.loginBtn}
          disabled={isLoading}
          onClick={() => console.log('Сменить пароль')}
        >
          {'Не помню пароль'}
        </Button>
      </div>
    </div>
  );
});

export default LoginFormCustom;
