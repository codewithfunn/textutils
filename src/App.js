import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#142134";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUlits Now!";
      // }, 1500);
      // console.log("mode == light");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

      // console.log("mode change== dark");
    }
  };

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About textUtils"/>  */}
      {/* <Navbar />   */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}   />
      <Alerts alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
