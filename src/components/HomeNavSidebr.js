import React,{useState} from "react";
import {BsTextIndentLeft,BsTextIndentRight,BsBookmarkPlusFill,BsChatRightDots,BsQuestionSquareFill,BsGrid} from  "react-icons/bs"
import "./Setting.css"
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';


function HomeNavSidebr() {
    const[status,setStatus]=useState(true)
    const[isOpen,setIsOpen]=useState(false)
   

    const handleClick=()=>{
        setStatus(status? false : true)
       }

       const handleToggleClick = ()=> setIsOpen(!isOpen)




    return (
    <>
   
    <div style={{ position: "relative" ,left: "-90px"}}>
    
         <span onClick= {handleToggleClick}>
          {status ?(<BsTextIndentLeft onClick={handleClick}/>):(<BsTextIndentRight onClick={handleClick}/>)}</span>
    </div>






    <div className="sidenav link.hover" style={{width:isOpen ? "250px":"60px"}} >

      <>
      
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{fontSize:"25px"}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
     </NavDropdown>
               <br/>
             <div>
                 <div style={{padding:"10px", font: "30px Arial sans-serif"}}><BsGrid  />   Dashboard </div>
           
                 <div style={{padding:"10px", font: "30px Arial sans-serif"}}><BsBookmarkPlusFill />   Bookmarks </div>
           
                 <div style={{padding:"10px", font: "30px Arial sans-serif"}} ><BsChatRightDots  />   Massages </div>
            
                <div style={{ padding:"10px" , font: "30px Arial sans-serif"}} >
                  <BsQuestionSquareFill  />      Help? </div>
             </div>
      </>
    </div>
   
   
    </>
  );
}

export default HomeNavSidebr;
