import React from 'react';
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

function PlaceOrder() {
  return (
    <div>

            <Grid container>  
            
            <Grid item xs={6}>
              <img  className='placeorder_image' src='https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464375'/>
            </Grid>

            <Grid item xs={3}>
              <div>Apple iPhone 14 (128 GB) - Blue</div>
              <Rating name="read-only" value="4" readOnly style={{fontSize: "10px"}} />
            </Grid>


            <Grid item xs={3}>
                Order
            </Grid>

            
            </Grid>



    </div>
  )
}

export default PlaceOrder;