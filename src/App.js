import MainGrid from "./Components/MainGrid";
import NavbarComponent from "./Components/NavbarComponent";

function App() {
  return (
    <div style={{
      backgroundColor: "#e7e7e7",
      height: "100vh",
    }}>
      <NavbarComponent />
      <MainGrid />
    </div>
  );
}

export default App;