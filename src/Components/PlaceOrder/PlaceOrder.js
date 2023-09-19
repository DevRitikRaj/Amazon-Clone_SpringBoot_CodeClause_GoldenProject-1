import React from 'react';
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

function PlaceOrder() {
    return (
        <div>

            <Grid container>

                <Grid item xs={6}>
                    <img className='placeorder_image' src='https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464375' />
                </Grid>

                <Grid item xs={4}>
                    <div className='placeorder_description' >
                        <div style={{fontSize:"20px",fontWeight:500,lineHeight: "32px"}}>Apple iPhone 14 (128 GB) - Blue</div>
                        <div>
                            <Rating name="read-only" value="4" readOnly style={{ fontSize: "20px" }} />
                            3,191 ratings |
                            1000+ answered questions
                        </div>
                        <hr></hr>
                        <div>

                            <div className='textgap'>Price <span className='pricetag'>₹65,999</span></div>
                            <div className='textgap'>Save extra with No Cost EMI</div>
                            <div className='textgap'>EMI starts at ₹3,200. No Cost EMI available</div>
                            <div>
                                <div style={{fontWeight:"500",paddingBottom: "10px"}}>About this Item</div>
                                <div>
                                <li>15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion</li>
                                <li>Dynamic Island, a magical new way to interact with iPhone</li>
                                <li>48MP Main camera for up to 4x greater resolution</li>
                                <li>Cinematic mode now in 4K Dolby Vision up to 30 fps</li>
                                <li>Vital safety technology — Crash Detection calls for help when you can’t</li>
                                </div>
                            </div>


                        </div>

                    </div>
                </Grid>


                <Grid item xs={2}>

                    <Paper variant='outlined' className='placeorder_order'>

                       
                         <Link to="/checkout">
                        <button className='placeorder_button addtocart'>Add to Cart</button>
                        </Link>

                       

                   
                        <button className='placeorder_button buynow'>Buy Now</button>
                        


                    </Paper>
                    
                </Grid>


            </Grid>



        </div>
    )
}

export default PlaceOrder;