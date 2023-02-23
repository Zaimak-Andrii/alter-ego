import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  selectAuthError,
  selectAuthIsLoading,
} from '@/redux/auth/auth.selectors';
import { loginThunk } from '@/redux/auth/auth.thunk';
import { useTranslation } from 'react-i18next';
import { LoginForm } from './Login.styled';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthIsLoading);
  const error = useAppSelector(selectAuthError);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const showPasswordClickHandler = () => setIsShowPassword(show => !show);

  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    dispatch(loginThunk({ login, password }));
  };
  return (
    <LoginForm component="form" onSubmit={submitHandler}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="auth-login">{t('auth.login')}</InputLabel>
        <OutlinedInput
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
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="auth-password">{t('auth.password')}</InputLabel>
        <OutlinedInput
          id="auth-password"
          name="password"
          type={isShowPassword ? 'text' : 'password'}
          autoComplete="current-password"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={showPasswordClickHandler}
                edge="end"
              >
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={t('auth.password')}
          value={password}
          onChange={evt => {
            setPassword(evt.target.value);
          }}
        />
      </FormControl>

      {error && <FormHelperText error>{error}</FormHelperText>}

      <LoadingButton type="submit" variant="contained" loading={isLoading}>
        {t('auth.signin')}
      </LoadingButton>
    </LoginForm>
  );
};

export default Login;
