import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),

  maxWidth: '400px',
  margin: '0 auto',
  padding: theme.spacing(4),

  border: '1px solid black',
  borderRadius: theme.spacing(2),
}));

LoginForm.defaultProps = {
  component: 'form',
};
