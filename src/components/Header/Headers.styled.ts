import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { yellow } from '@mui/material/colors';
import { LinkButton } from 'components/buttons';

export const NavButton = styled(LinkButton)(() => ({
  display: 'block',

  color: 'white',

  '&.active': {
    color: yellow[400],
  },
}));

NavButton.defaultProps = {
  component: NavLink,
};
