import React from "react";
import "./LeftSide.css"

function LeftSidepannel(props){
    return(

        <div className="leftside_main">

            <div className="leftside_header">Brand</div>
            <div className="leftside_brandname">
                <label  className="brandname">
                    <input type="checkbox" value="Apple"/>Apple
                </label>              
                <label  className="brandname">
                    <input type="checkbox" value="Samsung"/>Samsung
                </label> 
                <label  className="brandname">
                    <input type="checkbox" value="Mi"/>Mi
                </label>  
                <label  className="brandname">
                    <input type="checkbox" value="Oppo"/>Oppo
                </label>   



            </div>



        </div>
    );
}
export default LeftSidepannel;