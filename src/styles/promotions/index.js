import { Box, Typography, styled } from '@mui/material';
import { Colors } from '../theme';

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '40px 0px 40px 0px'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: '20px 0px 20px 0px',
  overflow: 'bidden',
  background: Colors.secondary
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up('md')]: {
    fontSize: '3em'
  },
  color: Colors.white,
  fontSize: '1.5rem'
}));
