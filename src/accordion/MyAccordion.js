import React,{useState} from "react";
import { BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from "react-icons/bs";
import "./Accordian.css"
 function MyAccordion({question,anSwer}){
   const [show,setShow]=useState(false)
   const handleShow=()=>{
        setShow(!show)
   }


    return (
        <div className="answer" >
         <div className="mainDiv">
        <div  className="container">
           <p  onClick={handleShow}>{show ? <BsFillArrowUpCircleFill/>:< BsFillArrowDownCircleFill/>}</p>
        
         <h3 className="heading">{question}</h3>
        </div>
        <div className="paragraph"> {show &&  <p>{anSwer}</p>}</div>
       </div>
       
     </div>
    )
    }
    export default MyAccordion;