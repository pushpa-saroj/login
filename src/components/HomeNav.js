import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-tooltip-lite";
import { NavLink } from "react-router-dom";
import "../App.css";
function HomeNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <span className="react-tooltip-lite">
              <NavLink to="/About">
                <Tooltip content="click on this link for about page">
                  <h1>About</h1>
                </Tooltip>
              </NavLink>
            </span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <span className="react-tooltip-lite">
                <NavLink to="/Home">
                  <Tooltip content="click on this link for home page">
                    Home
                  </Tooltip>
                </NavLink>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span className="react-tooltip-lite">
                <NavLink to="/Features">
                  <Tooltip content="click on this link for infomation about this wbsite">
                    Features
                  </Tooltip>
                </NavLink>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span className="react-tooltip-lite">
                <NavLink to="/Contact">
                  <Tooltip content="click on this link for contact me">
                    Contact
                  </Tooltip>
                </NavLink>
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNav;
