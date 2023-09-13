import './App.css';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import Navbar from './Components/Navbar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <MainPage/> */}
     {/* <DisplayContent /> */}
     <PlaceOrder />

    </div>
  );
}

export default App;
