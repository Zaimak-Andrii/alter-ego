import { Box, Container, BoxProps } from '@mui/material';
import React from 'react';

const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box component="section" py={2} {...props}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Page;
