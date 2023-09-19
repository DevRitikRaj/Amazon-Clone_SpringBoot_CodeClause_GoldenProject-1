import React from 'react';
import './checkout.css';
import Grid from '@mui/material/Grid';
import CheckOutItems from './CheckOutItems';

function checkout(props) {
  return (
    <div className='checkout_body'>

      <Grid container>

        <Grid item={10}>
          <div className='checkout_container'>
            <div style={{ fontSize: "30px", fontWeight: "600",padding: "6px 9px 12px 42px" }}>Shopping Cart</div>
            <hr></hr>
            <div>


              <CheckOutItems />
              <CheckOutItems />
              <CheckOutItems />
              
              {/* <CheckOutItems /> */}

            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div style={{width:"300px",height:"200px",padding: "10px",marginTop:"45px" ,backgroundColor: "white"}}>

          <div style={{fontSize: "22px",margin:"12px"}}>SubTotal (2 items):<strong> 1,12,200.00</strong> </div>
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