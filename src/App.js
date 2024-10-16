// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#18182d';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  //for alert component
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <>
      <Router>
        <Navbar title="textUtils" about="about" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<FormInput showAlert={showAlert} heading="Enter your text below" mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
