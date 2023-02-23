import { useAppSelector } from '@/hooks/redux';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AccessPageProps } from './AccessPage.type';
import { selectIsLoggedIn } from '@/redux/auth/auth.selectors';

const PrivatePage: React.FC<AccessPageProps> = ({ redirectTo, component }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivatePage;
