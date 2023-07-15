
import { useState } from 'react';
import React  from 'react';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextArea from './TextArea';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('dark');
  const [textMode, setTextMode] = useState('light');
  const [alert, setAlert] = useState(null);

  console.log(mode);
  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "danger");
    }
  }

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
  }

  return (
  <Router>
    <>
    <Navbar title="To-Do List" text="Dropdown12" mode={mode} toggleMode={toggleMode} textMode={textMode}/>
    <Alert alert={alert}/>
    <div className={`container bg-${mode}`}>
    <Routes>
      <Route path="/about" element={ <About mode={mode} /> }/>
      <Route path="/" element ={ <TextArea textMode={textMode} heading="Enter your text below"></TextArea> } />
    </Routes>
    </div>
    </>
  </Router>
  );
}

export default App;
