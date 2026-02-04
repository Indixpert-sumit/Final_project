import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../sass/Navbar.css'
import bag from './../assets/bag.svg'
const Navbar_ = () => {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
<img src={bag} alt="" />

        <Navbar href="#home" className="job">
          Job Portal
        </Navbar>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav >

            <Nav.Link className="home" href="#home">Home</Nav.Link>
            <Nav.Link className="jobs" href="#jobs">Jobs</Nav.Link>
            <Nav.Link className="aboutus" href="#about">About Us</Nav.Link>
            <Nav.Link className="contactus" href="#contact">Contact Us</Nav.Link>
            <Nav.Link className="login" href="#login">Login</Nav.Link>

            <Button
              variant="success"
              className="register"
            >
              Register
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navbar_
