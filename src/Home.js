import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import {NavLink,Link} from "react-router-dom"
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      {/* <div>
    <li>
      <Link to="/About">Abot</Link>
    </li>
</div> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <span>
              <NavLink to="/About">About</NavLink>
            </span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
