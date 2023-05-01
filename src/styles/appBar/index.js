import { Box, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../theme';

export const AppBarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px'
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4em',
  fontFamily: '"Montez", "cursive"',
  color: Colors.primary
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center'
}));
