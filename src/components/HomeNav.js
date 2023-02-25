import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import {Tooltip} from "react-tooltip";
import { NavLink } from "react-router-dom";
import HomeNavSidebr from "./HomeNavSidebr";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonCircle,BsSearch} from "react-icons/bs";

function HomeNav() {
  return (
    <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
            <span >
                <h1 > <HomeNavSidebr/></h1>
            </span>
          </Navbar.Brand>


          <Navbar.Brand>
            <span>
              <NavLink to="/About">
                <h1>About</h1>
              </NavLink>
            </span>
          </Navbar.Brand>


          <Nav className="me-auto">
            <Nav.Link>
              <span >
                <NavLink to="/Home">
                  Home
                </NavLink>
              </span>
            </Nav.Link>


            <Nav.Link>
              <span >
                <NavLink to="/Features">
                  {/* <Tooltip content="click on this link for infomation about this wbsite">
                    Features
                  </Tooltip> */}
                  Features
                </NavLink>
              </span>
            </Nav.Link>


            <Nav.Link>
              <span >
                <NavLink to="/Contact">
                  Contact
                </NavLink>
              </span>
            </Nav.Link>


           
          </Nav>
          <BsPersonCircle style={{color:"white", fontSize:"50px"}}/>
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
