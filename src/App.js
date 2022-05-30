import MainGrid from "./Components/MainGrid";
import NavbarComponent from "./Components/NavbarComponent";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Utils/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HealthCheckComponent from "./Components/HealthCheckComponent";

function App() {
    return (
        <div
            style={{
                backgroundColor: "#e7e7e7",
                height: "100wh",
            }}
        >
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={[<NavbarComponent />, <MainGrid />]}
                        />
                        <Route
                            path="/health-check"
                            element={<HealthCheckComponent />}
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
