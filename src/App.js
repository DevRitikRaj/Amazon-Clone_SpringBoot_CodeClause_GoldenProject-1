import './App.css';
import React from 'react';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import Navbar from './Components/Navbar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/CheckOut/checkout';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// function App() {
//   return (
//     <Router>

//       <div className="App">
//         <Navbar />

//         <Routes>

//           <Route path="/display">
//             <DisplayContent />

//           </Route>

//           <Route path="/order">
//           <PlaceOrder />

//           </Route>

//           <Route path="/checkout">
//           <Checkout />

//           </Route>

//           <Route path="">
//           <MainPage/>

//           </Route>



          






          

          
          

//         </Routes>

//       </div>
//     </Router>
//   );
// }

// export default App;



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<MainPage/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<PlaceOrder />} />
        <Route path="/display" element={<DisplayContent />} />
      </Routes>
    </Router>
  );
};

export default App;