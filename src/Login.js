import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    console.log("saved In Local storage");
    navigate("/HomeNav");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LogIn</h1>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="Password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>

        <p>Already Registered {""} login in?</p>
      </form>
    </div>
  );
}
export default Login;
