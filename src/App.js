import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from './Components/About';

function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
      setAlert ({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is enabled","success")     
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled","success")
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextArea mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
