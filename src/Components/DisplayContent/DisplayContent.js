import React from "react";
import LeftSidepannel from "./LeftSide/LeftSidepannel";
import RightSidepannel from "./RightSide/RightSidepannel";


function DisplayContent(props){
    return(

        <div>
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