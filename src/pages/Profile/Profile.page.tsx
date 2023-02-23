import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  selectUserName,
  selectAuthIsLoading,
} from '@/redux/auth/auth.selectors';
import { LoadingButton } from '@mui/lab';
import { logoutThunk } from '@/redux/auth/auth.thunk';
import Page from '@/components/Page';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const userName = useAppSelector(selectUserName);
  const isLoading = useAppSelector(selectAuthIsLoading);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const logoutHandler = () => {
    dispatch(logoutThunk());
  };

  return (
    <Page>
      <Box mx="auto" display="flex" justifyContent="center" alignItems="center">
        <Typography mr={2}>{t('profile.welcome', { userName })}</Typography>
        <LoadingButton
          onClick={logoutHandler}
          variant="contained"
          loading={isLoading}
        >
          {t('profile.logout')}
        </LoadingButton>
      </Box>
    </Page>
  );
};

export default ProfilePage;
