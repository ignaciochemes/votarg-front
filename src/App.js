import MainGrid from "./Components/MainGrid";
import NavbarComponent from "./Components/NavbarComponent";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Utils/Theme';

function App() {
    return (
        <div style={{
            backgroundColor: "#e7e7e7",
            height: "100wh",
        }}>
            <ThemeProvider theme={theme}>
                <NavbarComponent />
                <MainGrid />
            </ThemeProvider>
        </div>
    );
}

export default App;