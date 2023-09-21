import React from 'react';
import './checkout.css';

function CheckOutItems(props) {
    return (
        <div>

            <div style={{ border: "1px solid black", display: "flex", width: "90%", height: "250px", margin: "52px" }}>

                <div style={{ margin: "25px" }}>
                    <img height="200px" src={props.definition.image} />                </div>
                <div style={{marginTop: "20px"}}>

                    <div style={{fontSize: "24px"}} className='textgap'>{props.definition.name}</div>
                    <div style={{fontWeight: "bold"}} className='textgap'>{props.definition.price}</div>
                    <div className='textgap'>{props.definition.status}</div>
                </div>
            </div>







        </div>
    )
}

export default CheckOutItems;