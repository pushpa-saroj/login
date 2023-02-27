import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import HomeNavSidebr from "../components/HomeNavSidebr";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonCircle} from "react-icons/bs";

function HomeNav() {
  return (
    <div >
      
     
         <Navbar bg="black" >
           <Container >
           
          <Navbar.Brand  >
            <span >
              <NavLink to="/About"  style={{textDecoration: 'none'}}>
                <h3 >About</h3>
              </NavLink>
            </span>
          </Navbar.Brand>


         
            <Navbar.Brand>
              <span >
                <NavLink to="/Home"  style={{textDecoration: 'none'}}>
                  <h3>Home</h3>
                </NavLink>
              </span>
            </Navbar.Brand>


            <Navbar.Brand>
              <span >
                <NavLink to="/Features"  style={{textDecoration: 'none'}}>

                 <h3>Features</h3>
                </NavLink>
              </span>
            </Navbar.Brand>


            <Navbar.Brand >
              <span >
                <NavLink to="/Contact"  style={{textDecoration: 'none'}}>
                <h3>Contact</h3>
                </NavLink>
              </span>
            </Navbar.Brand>

            <Navbar.Brand >
              <span >
                <NavLink to="/Contact"  style={{textDecoration: 'none'}}>
                <h3>Contact</h3>
                </NavLink>
              </span>
            </Navbar.Brand>

          <BsPersonCircle style={{color:"white", fontSize:"40px"}}/>
        </Container>

        <NavDropdown title="En" id="basic-nav-dropdown" style={{color:"white", position: "relative" ,left: "-80px"}}>
              <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Urdu
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

      </Navbar>
    </div>
  );
}

export default HomeNav;
