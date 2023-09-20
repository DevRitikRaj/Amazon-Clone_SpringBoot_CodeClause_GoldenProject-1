import React, { useState, useEffect } from 'react';
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';

function PlaceOrder(props) {
    

    const [ProductDetails,setProductDetails]= useState([]);
    let { id } =useParams();
    console.log(id);
    useEffect(() =>{

        let list=[

            {
                id: 1,
                name: "New Apple iPhone 100",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },

            {
                id: 2,
                name: "New Apple iPhone 11",
                rating: "34565",
                review: "1000",
                // emi: "2401",
                // delivery: "Wednesday, Aug 18",
                price: "50999",
                // status: "In stock",
                // soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
                about: [
                    "Desription for iphone 11 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },


            {
                id: 3,
                name: "Iphone12",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },

            {
                id: 4,
                name: "Iphone13",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "637357",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
                about: [
                    "Desription for iphone 13 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },


            {
                id: 5,
                name: "Iphone14",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 pro pmax -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },


            {
                id: 6,
                name: "Iphone15",
                rating: "637357",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "Desription for iphone 13 -bla mini bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
        ];

       //fake APi
       
       let itemfilter = list.filter ( item => {
        if(item.id== id) return item;
    })

    console.log(itemfilter); 
    setProductDetails(itemfilter[0]);
},[]);





    return (
        <div>

            <Grid container>

                <Grid item xs={6}>
                    <img className='placeorder_image' src='https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464514' />
                </Grid>

                <Grid item xs={4}>
                    <div className='placeorder_description' >
                        <div style={{fontSize:"20px",fontWeight:500,lineHeight: "32px"}}>{ProductDetails.name}</div>
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