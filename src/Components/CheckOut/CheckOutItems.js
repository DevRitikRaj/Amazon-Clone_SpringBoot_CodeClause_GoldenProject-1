import React from 'react';
import './checkout.css';

function CheckOutItems(props) {
    return (
        <div>

            <div style={{ border: "1px solid black", display: "flex", width: "90%", height: "250px", margin: "52px" }}>

                <div style={{ margin: "25px" }}>
                    <img height="200px" src='https://ik.imagekit.io/amazon8064/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1693939464375' />                </div>
                <div style={{marginTop: "20px"}}>

                    <div style={{fontSize: "24px"}} className='textgap'>Apple iPhone 13 (128GB) - Blue</div>
                    <div style={{fontWeight: "bold"}} className='textgap'>59,999</div>
                    <div className='textgap'>In Stock</div>
                </div>
            </div>







        </div>
    )
}

export default CheckOutItems;