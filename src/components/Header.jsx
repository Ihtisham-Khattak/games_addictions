import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Games Addiction</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-decoraction-none"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/card">Cards</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/popularity">Popularity</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/testimonial">Testimonial</Link>
            </Nav.Link>
          </Nav>
          <Button variant="outline-success">Addiction</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
