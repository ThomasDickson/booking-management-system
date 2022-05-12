import './App.css';
import NavigationBar from './components/NavigationBar';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Sans'
    ],
    h6: {
      color: "#2796FD",
      fontWeight: 700,
      fontSize: 24,
    },
  },
});


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar/>
      </ThemeProvider>
    </div> 
  );
}

export default App;
