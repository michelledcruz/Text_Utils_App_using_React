
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextArea from './TextArea';

function App() {
  return (
  <>
  <Navbar title="To-Do List" text="Dropdown12"/>
  <div className="container">
  <TextArea heading="Enter your text below"></TextArea>
  {/* <About></About> */}
  </div>
  </>
  );
}

export default App;
