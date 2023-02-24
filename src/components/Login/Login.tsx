import React, { useState } from 'react';
import { FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import {
  selectAuthError,
  selectAuthIsLoading,
} from '@/redux/auth/auth.selectors';
import { loginThunk } from '@/redux/auth/auth.thunk';
import { LoginForm } from './Login.styled';
import { FormInput, FormPasswordInput } from '@/components/form';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthIsLoading);
  const error = useAppSelector(selectAuthError);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    dispatch(loginThunk({ login, password }));
  };
  return (
    <LoginForm onSubmit={submitHandler}>
      <FormInput
        id="auth-login"
        name="login"
        type="text"
        label={t('auth.login')}
        autoComplete="nickname"
        required
        value={login}
        onChange={evt => {
          setLogin(evt.target.value);
        }}
      />

      <FormPasswordInput
        id="auth-password"
        name="password"
        autoComplete="current-password"
        required
        label={t('auth.password')}
        value={password}
        onChange={evt => {
          setPassword(evt.target.value);
        }}
      />

      {error && <FormHelperText error>{error}</FormHelperText>}

      <LoadingButton type="submit" variant="contained" loading={isLoading}>
        {t('auth.signin')}
      </LoadingButton>
    </LoginForm>
  );
};

export default Login;
