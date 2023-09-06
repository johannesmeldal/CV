import React from "react";
import { Container, Button } from "@mui/material";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Styles.css";

interface Props {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

const App = ({ darkmode, setDarkmode }: Props) => {
  const handleDarkmode = ({ darkmode, setDarkmode }: Props) => {
    setDarkmode(!darkmode);
  };

  return (
    <div className="app">
      <Navbar />
      <Button
        className="darkbutton"
        variant="contained"
        onClick={
          () => handleDarkmode({ darkmode, setDarkmode }) //handleDarkmode må ha med props for å kunne endre på darkmode
        }
      >
        {darkmode ? <MdOutlineDarkMode /> : <MdLightMode />}
      </Button>
      <Outlet />
    </div>
  );
};

export default App;
