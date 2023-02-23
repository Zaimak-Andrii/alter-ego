import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  BoxProps,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { languages } from '@/i18n';
import { StyledSelect } from './LanguageSwitcher.styled';
import FlagImage from './FlagImage';

const LanguageSwitcher: FC<BoxProps> = props => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(() => i18n.language);

  const changeLanguageHandler = (evt: SelectChangeEvent<unknown>) => {
    const value = evt.target.value as string;

    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <Box {...props}>
      <StyledSelect
        variant="outlined"
        value={lang}
        onChange={changeLanguageHandler}
        inputProps={{ IconComponent: () => null }}
        renderValue={value => (
          <FlagImage flag={languages[value as string].flag} />
        )}
      >
        {Object.keys(languages).map(key => (
          <MenuItem key={key} value={key}>
            <FlagImage flag={languages[key].flag} />
            <Typography ml={1}>{languages[key].label}</Typography>
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default LanguageSwitcher;
