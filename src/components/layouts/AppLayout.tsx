import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import { Box } from '@mui/material';

const AppLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Box component="main" mt="64px">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
export default AppLayout;
