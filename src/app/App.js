/* eslint-disable react/jsx-pascal-case */
import './App.css';
import AppBar_ from '../components/appbar/index';
import theme from './styles/theme';
import { Box, Container, Stack, ThemeProvider, Typography } from '@mui/material';
import Banner from '../components/banner';
import { Promotions } from '../components/promotions';
import Products from '../components/products';
import { useEffect } from 'react';
import { UIProvider } from '../context/ui';
import SearchBox from '../components/search';
import Footer from '../components/footer';
import AppDrawer from '../components/drawer';

function App() {
  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          bgcolor: '#fff'
        }}
      >
        <Stack>
          <UIProvider>
            <AppBar_ />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
