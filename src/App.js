
import { useState } from 'react';
// import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextArea from './TextArea';


function App() {

  const [mode, setMode] = useState('dark');
  const [textMode, setTextMode] = useState('light');

  console.log(mode);
  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      setTextMode("light");
    }
    else{
      setMode("light");
      setTextMode("dark");
    }
  }

  return (
  <>
  <Navbar title="To-Do List" text="Dropdown12" mode={mode} toggleMode={toggleMode} textMode={textMode}/>
  <div className={`container bg-${mode}`}>
  <TextArea textMode={textMode} heading="Enter your text below"></TextArea>
  {/* <About></About> */}
  </div>
  </>
  );
}

export default App;
