import React, { useContext } from 'react';
import './checkout.css';
import Grid from '@mui/material/Grid';
import CheckOutItems from './CheckOutItems';
import { CartContext } from '../CartContext';

function checkout(props) {
  const cartValue = function(){
    let price=0;
    for(let i=0;i<item.length;i++){
        price+=parseInt(item[i].price);
    }
    return price;
}








  const {item,size,increment} = useContext(CartContext);   
  return (
    <div className='checkout_body'>

      <Grid container>

        <Grid item={10}>
          <div className='checkout_container'>
            <div style={{ fontSize: "30px", fontWeight: "600",padding: "6px 9px 12px 42px" }}>Shopping Cart</div>
            <hr></hr>
            <div>

              {
                 item.length >0 ?
                 item.map( (value) => (
                     <CheckOutItems definition={value} />
                 ))
                 : <div style={{height: "100vh", margin: "30px" }}> Please buy something</div>

              }


              {/* <CheckOutItems />
              <CheckOutItems />
              <CheckOutItems />
               */}
             

            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div style={{width:"300px",height:"200px",padding: "10px",marginTop:"45px" ,backgroundColor: "white"}}>

          <div style={{fontSize: "22px",margin:"12px"}}>SubTotal {size}(items):<strong><br></br> ⟨₹⟩ {cartValue()}</strong> </div>
          <div>
            <button style={{padding: "8px"}} className='placeorder_button'>Procced to Buy</button>
          </div>
          </div>
        </Grid>
      </Grid>



    </div>
  );
}

export default checkout;