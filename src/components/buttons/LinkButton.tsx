import { styled } from '@mui/material/styles';
import { ButtonProps, Button } from '@mui/material';
import { Link, NavLink, To } from 'react-router-dom';

interface ILink extends ButtonProps {
  component?: typeof NavLink | typeof Link;
  to: To;
  replace?: boolean;
  state?: any;
}

export const LinkButton = styled(Button)<ILink>({});

LinkButton.defaultProps = {
  component: Link,
};
