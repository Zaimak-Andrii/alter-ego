import { FC, useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormPasswordInput: FC<OutlinedInputProps> = ({
  id,
  label,
  ...otherProps
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const showPasswordClickHandler = () => setIsShowPassword(prev => !prev);

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <OutlinedInput
        id={id}
        label={label}
        type={isShowPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={showPasswordClickHandler}
              edge="end"
            >
              {isShowPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...otherProps}
      />
    </FormControl>
  );
};

export default FormPasswordInput;
