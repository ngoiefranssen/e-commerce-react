/* eslint-disable react/jsx-pascal-case */
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBarMobile_ from './appMobile';
import AppBarDesktop_ from './appDesktop';

const AppBar_ = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return <>{matches ? <AppBarMobile_ /> : <AppBarDesktop_ />}</>;
};

export default AppBar_;
