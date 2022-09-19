// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "akshat";
function App() {
  return (
    <>

      <Navbar title="Text Detailer" />
      <div className="container my-3" >  <TextForm  heading="Enter your text below"/></div>

    </>
  );
}

export default App;
