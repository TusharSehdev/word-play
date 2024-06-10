import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const appStyle = {
    backgroundImage: `url('./imagebg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: mode === "dark" ? "white" : "black",
  };
  const textBoxStyle = {
    margin: "100px",
    boxShadow: "3px 3px 3px rgba(0,0,0,0.9)",
    borderRadius: "50px",
    backgroundColor: "rgba(0,0,0,0.50)",
  };

  return (
    <div style={appStyle}>
      {/* <Login/> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div style={textBoxStyle}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
