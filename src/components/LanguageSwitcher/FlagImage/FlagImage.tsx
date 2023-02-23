import { FC } from 'react';

type FlagImageType = {
  flag: string;
};

const FlagImage: FC<FlagImageType> = ({ flag }) => (
  <img
    loading="lazy"
    width="20"
    src={`https://flagcdn.com/w20/${flag}.png`}
    srcSet={`https://flagcdn.com/w40/${flag}.png 2x`}
    alt="English"
  />
);

export default FlagImage;
