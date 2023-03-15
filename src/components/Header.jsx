import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const navbar_link = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/card",
    name: "Cards",
  },
  {
    link: "/popularity",
    name: "Popularity",
  },
  {
    link: "/testimonial",
    name: "Testimonial",
  },
];
function Header() {
  const [navBg, setNavBg] = useState(false);

  const hideBackground = () => {
    if (window.scrollY > 10) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideBackground);

    return () => window.removeEventListener("scroll", hideBackground);
  });
  return (
    <Navbar expand="lg" className={navBg ? "navbg" : ""} sticky="top">
      <Container style={{ position: "sticky" }}>
        <Navbar.Brand className="text-white">Games Addiction</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="text-center" style={{zIndex: 1}} >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {navbar_link.map((item, index) => (
              <Nav.Link key={index}>
                <Link
                  to={item.link}
                  className="text-decoration-none text-white"
                >
                  {item.name}
                </Link>
              </Nav.Link>
            ))}
            <Button variant="outline-success">Addiction</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
