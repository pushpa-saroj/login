import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill, BsPersonCircle } from "react-icons/bs";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openEye, setOpenEye] = useState(false);

  function handleSubmit(e) {
    if(email && password){ e.preventDefault();

      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      console.log("saved In Local storage");
      navigate("/HomeNav");}else{alert("Fill All Input")}
   
  }

  const handleEye = () => {
    setOpenEye(openEye ? false : true);
  };

  return (
    <div className="mainDiv">
      <form onSubmit={handleSubmit} className="cntr">
        <h1 style={{ fontFamily: "fantasy" }}>LogIn</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter Full Email"
              onChange={(event) => setEmail(event.target.value)}
              className="input"
              style={{ marginLeft: "10px" }}
            />
          </div>

          <div>
            <input
              type={openEye ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
              className="input"
            
            />
            <span style={{marginLeft:"-30px"}}>
              {openEye ? (
                <BsEyeFill onClick={handleEye} />
              ) : (
                <BsEyeSlashFill onClick={handleEye} />
              )}
            </span>
          </div>
        </div>

        <button type="submit" className="button">
          Log In
        </button>

        <h5>
          {""}Go to {""}
          <span>
            <NavLink to="/">Registeration</NavLink>
          </span>{" "}
          ?
        </h5>
      </form>
    </div>
  );
}
export default Login;
