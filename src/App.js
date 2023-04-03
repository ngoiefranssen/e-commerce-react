import './App.css';
import theme from './styles/theme';
import { Container } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#fff"
        }}
      ></Container>
    </ThemeProvider>
  );
}

export default App;
