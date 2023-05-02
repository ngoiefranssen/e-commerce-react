/* eslint-disable react/jsx-pascal-case */
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBarMobile_ from './AppBarMobile_';
import AppBarDesktop_ from './AppBarDesktop_';

const AppBar_ = () => {
  const theme = useTheme();
  const Matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>{Matches ? <AppBarMobile_ Matches={Matches} /> : <AppBarDesktop_ Matches={Matches} />}</>
  );
};

export default AppBar_;
