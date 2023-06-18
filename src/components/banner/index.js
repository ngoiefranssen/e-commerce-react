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
      <BannerImage src="/images/bannier/name_image.extension" />
      <BannerContent>
        <Typography variant="h6">FN collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut
          labore et dolore magna
        </BannerDescription>
        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContanair>
  );
};

export default Banner;
