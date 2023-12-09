import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from './Route/Router';

const theme = createTheme({
  typography: {
    fontSize: '16px',
    fontFamily: 'Poppins',
    h3: {
      fontSize: '40px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '32px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500,
      p:1,
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
