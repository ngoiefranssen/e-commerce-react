/* eslint-disable no-unused-vars */
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import {
  BannerContanair,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle
} from '../../styles/banner';

const Banner = () => {
  const theme = useTheme();
  const Matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <BannerContanair>
      <BannerImage src="/images/name_dossier/name_image.extension" />
      <BannerContent>
        <Typography variant="h6">FN collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">Exemple to shop</BannerDescription>
      </BannerContent>
    </BannerContanair>
  );
};

export default Banner;
