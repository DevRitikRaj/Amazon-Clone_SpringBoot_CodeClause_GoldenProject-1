import React from "react";
import LeftSidepannel from "./LeftSide/LeftSidepannel";
import RightSidepannel from "./RightSide/RightSidepannel";


function DisplayContent(props){
    return(

        <div style={{display: "flex"}}>
           <div>
            <LeftSidepannel />
           </div>

           <div>
           <RightSidepannel /> 
           </div>

        </div>


    );
}
export default DisplayContent;