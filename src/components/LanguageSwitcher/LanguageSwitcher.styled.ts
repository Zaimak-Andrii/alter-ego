import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSelect = styled(Select)(({ theme }) => ({
  '.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
    padding: theme.spacing(1),

    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));
