import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Typography, BoxProps } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn, selectUserName } from '@/redux/auth/auth.selectors';
import { LinkButton } from 'components/buttons/LinkButton';
import { routes } from '@/constants';

const UserInfo: FC<BoxProps> = props => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userName = useAppSelector(selectUserName);
  const { t } = useTranslation();

  return (
    <Box {...props}>
      {isLoggedIn ? (
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2">
            {t('header.user.welcome', { userName })}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
            component={Link}
            to={routes.PROFILE}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      ) : (
        <LinkButton to={routes.LOGIN} sx={{ color: 'white', display: 'block' }}>
          {t('header.user.login')}
        </LinkButton>
      )}
    </Box>
  );
};

export default UserInfo;
