import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Registeration() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lasttName", JSON.stringify(lastName));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));

    console.log("saved In Local storage");
    navigate("/Login");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            placeholder=" FirstName "
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            placeholder=" LastName "
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder=" Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit"> Register</button>
      </form>
    </>
  );
}
export default Registeration;
