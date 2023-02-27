import React ,{useEffect}from "react"
import "./Popup.css"

const MyModel=({closeModel})=>{
    
    useEffect(()=>{
        document.body.style.overflowY="hidden";//use this coz when popup create bakgroud not scroll(stay)
        return()=>{
            document.body.style.overflowY="hidden";
        }
    },[])
    
    return(
    <> 
<div className="modal-wrapper" onClick={closeModel}></div>
<div className="modal-container">
    <h1>stay</h1>
    <p>The alert box takes the focus away from the current window, and forces the user to read the message.

Do not overuse this method. It prevents the user from accessing other parts of the page until the alert box is closed.</p>
    <button className="model-btn" onClick={closeModel}> accept</button>
    </div>
    </>

       
  )  }
  export default MyModel;