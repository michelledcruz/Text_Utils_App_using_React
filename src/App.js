
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextArea from './TextArea';

function App() {
  return (
  <>
  <Navbar title="TextUtils" text="Dropdown12"/>
  <div className="container">
  {/* <TextArea heading="Enter your text below"/> */}
  <About></About>
  </div>
  </>
  );
}

export default App;
