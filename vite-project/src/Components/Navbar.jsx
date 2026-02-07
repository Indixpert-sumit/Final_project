import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/Navbar.css";
import bag from "./../assets/bag.svg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Navbar_ = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        {/* Left logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img src={bag} alt="logo" /> Job Portal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center menu */}
          <Nav className="mx-auto gap-4">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/job">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>

          {/* Right buttons */}
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Button as={Link} to="/register" variant="success">
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar_;
