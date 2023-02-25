import React,{useState} from "react";
import { Draggable } from "drag-react";
import { BsToggle2On ,BsToggleOff} from "react-icons/bs";
import "../App.css"

function Home() {
 const[onToggle,setOnToggle]=useState(true)
 const[offToggle,setOffToggle]=useState(true)
 const[status,setStatus]=useState(true)

  const handleToggle=()=>{
     setOnToggle(onToggle ? false :true);
  }
  const handleToggleOn=()=>{
    setOffToggle(offToggle ? false :true);
 }
 const handleClick=()=>{
  setStatus(status? false :true)
 }

  return (
    <div>
      <Draggable>
        <div className="drag">dragging this line view for home page</div>
      </Draggable>
      
      
      <div>
        <h1>Home page</h1>
       
        {/* {status?<h5>on</h5>:<h5>off</h5>}
         <button onClick={()=>setStatus(false)}>Off</button>
        <button onClick={()=>setStatus(true)}>On</button> 
        <button onClick={()=>setStatus(!status)}>Toggle</button> */}
       
     {console.log("onToggle",onToggle)}
       
       
        <div>
        {onToggle? <h5>on</h5>:<h5>off</h5>}
      
       <span>{onToggle ?(<BsToggle2On onClick={handleToggle}/>):(<BsToggleOff onClick={handleToggle}/>)}</span>
       <br/>
       {offToggle? <h5>off</h5>:<h5>on</h5>}
       <span>{offToggle ?(<BsToggleOff onClick={handleToggleOn}/>):(<BsToggle2On onClick={handleToggleOn}/>)}</span>
      
        </div>
      </div>
    </div>
  );
}

export default Home;
