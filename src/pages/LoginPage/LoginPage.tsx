import { classNames } from '../../shared/classNames/classNames';
import React from 'react';
import cls from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../feature/authByUsername/ui/LoginForm';

interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
  // const inited = useAppSelector(getUserInited);
  // const isUserAdmin = useAppSelector(getIsUserAdmin);
  // const isUserUser = useAppSelector(getIsUserUser);

  const navigate = useNavigate();

  const inited = false;

  if (inited) {
    navigate('/profile');
  } else {
  }
  return (
    <div className={classNames(cls.loginPage, {}, [className])}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
