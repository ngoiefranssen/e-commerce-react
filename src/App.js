/* eslint-disable react/jsx-pascal-case */
import './App.css';
import AppBar_ from './components/appbar';
import theme from './styles/theme';
import { Container, ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#fff"
        }}
      >
        <AppBar_ />
      </Container>
    </ThemeProvider>
  );
}

export default App;
