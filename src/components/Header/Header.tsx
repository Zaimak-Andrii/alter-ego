import { AppBar, Box, Container, Divider, Toolbar } from '@mui/material';
import UserInfo from './UserInfo';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import AppNav from './AppNav';

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <AppNav />
            <UserInfo ml="auto" />
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              sx={{ mx: 1 }}
            />
            <LanguageSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
