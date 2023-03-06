import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {BsPersonCircle} from "react-icons/bs"

import "./Registration.css"

function Registeration() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function handleSubmit(e) {
    if(firstName && lastName && email && password){
      e.preventDefault();

    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lasttName", JSON.stringify(lastName));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));

    console.log("saved In Local storage");
    navigate("/Login");
    }
    else{alert("Fill All Input Box ")}
    
  }


  return (
    <div className="div">
  
    <div >
      <form onSubmit={handleSubmit}   >
        <div style={{fontSize:"130px",marginBottom:"30px"}}><BsPersonCircle /></div>
        <div>
        <div  >
          <label className="label">FirstName :</label>
          <input
          className="inputBox"
            type="text"
            placeholder=" FirstName "
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div >
          <label className="label">LastName :</label>
          <input
            type="text"
            placeholder=" LastName "
            onChange={(e) => setLastName(e.target.value)}
            className="inputBox"
          />
        </div>
        <div  >
          <label className="label">Email :</label>
          <input
           style={{marginLeft:"42px"}}
            type="text"
            placeholder=" Email"
            onChange={(e) => setEmail(e.target.value)}
            className="inputBox"
          />
        </div>
        <div>
          <label className="label">Password :</label>
          <input
            type="text"
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
            className="inputBox"
          />
        </div>
        </div>

        <br />
        <button type="submit"  className="bttnn"> Register</button>
        <h5>
           {""} Already Registered {""}
            <span>
              <NavLink to="Login">Login</NavLink>
            </span>{" "}
            ?</h5>
      </form>
     </div>
    </div>
  );
}
export default Registeration;
