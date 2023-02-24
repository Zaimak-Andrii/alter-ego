import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

const FormInput: FC<OutlinedInputProps> = ({ id, label, ...otherProps }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput id={id} label={label} {...otherProps} />
    </FormControl>
  );
};

export default FormInput;
