import './App.css';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import Navbar from './Components/Navbar/Navigation';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <MainPage/> */}
     <DisplayContent />

    </div>
  );
}

export default App;
