import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { AccessPageProps } from './AccessPage.type';
import { selectIsLoggedIn } from '@/redux/auth/auth.selectors';

const RestrictPage: React.FC<AccessPageProps> = ({ redirectTo, component }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictPage;
