import './App.css';
import React from 'react';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import Navbar from './Components/Navbar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/CheckOut/checkout';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import CartContextProvider from './Components/CartContext';
import CartProvider from './Components/CartContext';



const App = () => {
  return (
    <Router>
      
      {/* <CartContextProvider> */}
      <CartProvider>
      <Navbar />
     
      <Routes>
      
        <Route path="/" element={<MainPage/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<PlaceOrder />} />
        <Route path="/display" element={<DisplayContent />} />
      </Routes>
      {/* </CartContextProvider> */}
      </CartProvider>
    
    </Router>
  );
};

export default App;