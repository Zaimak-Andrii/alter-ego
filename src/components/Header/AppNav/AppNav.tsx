import { FC, useMemo } from 'react';
import { Box, BoxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { routes } from '@/constants';
import { NavButton } from '../Headers.styled';

const AppNav: FC<BoxProps> = props => {
  const { t, i18n } = useTranslation();

  const pages = useMemo(
    () => [
      { text: t('header.navigation.home'), to: routes.HOME },
      { text: t('header.navigation.news'), to: routes.NEWS },
    ],
    [i18n.language]
  );

  return (
    <Box component="nav" {...props}>
      <Box component="ul" display="flex" gap={2}>
        {pages.map(({ text, to }) => (
          <Box component="li" key={text}>
            <NavButton to={to}>{text}</NavButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AppNav;
