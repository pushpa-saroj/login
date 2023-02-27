import React,{useState} from "react";
import MyModel from "./myModel";
function Popup(){
    const[showModel,setShowModel]=useState(false)
    const closeModel=()=>setShowModel(false)
//     const MyModel=()=>{return(<> 
//     <h1>stay</h1>
//     <p>The alert box takes the focus away from the current window, and forces the user to read the message.

// Do not overuse this method. It prevents the user from accessing other parts of the page until the alert box is closed.</p>
//     <button onClick={closeModel}> accept</button>
//     </>

       
//   )  }
   
    return(
        <>
        <button className="model-btn" onClick={()=>setShowModel(true)}>click</button>
        {/* {showModel && <MyModel/>} */}
        {showModel && <MyModel closeModel={closeModel}/>}

        </> 
        
    )
}
export default Popup;