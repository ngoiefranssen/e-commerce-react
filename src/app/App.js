/* eslint-disable react/jsx-pascal-case */
import './App.css';
import AppBar_ from '../components/appbar/index';
import theme from './styles/theme';
import { Container, ThemeProvider } from '@mui/material';
import Banner from '../components/banner';
import { Promotions } from '../components/promotions';
import Products from '../components/products';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: '#fff'
        }}
      >
        <AppBar_ />
        <Banner />
        <Promotions />
        <Products />
        {/*
          
          Footer
          SearchBox
          appdrawer
        */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
