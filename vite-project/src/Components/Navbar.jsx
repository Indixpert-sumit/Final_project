import 'bootstrap/dist/css/bootstrap.min.css'
import '../sass/Navbar.css'
import bag from '../assets/bag.svg'
import { Link } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap'

const Navbar_ = () => {
  return (
       <nav className="main_nav">
      <div className="nav_container">

        {/* LEFT LOGO */}
        <div className="logo">
          <span className="logo-icon"><img src={bag} alt="" /></span>
          <span className="logo-text">Job Portal</span>
        </div>

        {/* CENTER LINKS */}
        <div className="nav-links">
          <Link className="home" to="/">Home</Link>
          <Link className="job" to="/jobs">Jobs</Link>
          <Link className="about" to="/about">About Us</Link>
          <Link className="contact" to="/Contact">Contact Us</Link>
        </div>

        {/* RIGHT AUTH */}
        <div className="auth">
          <Link className="login" to="/login">Login</Link>
          <Link className="register" to="/register">Register</Link>
        </div>

      </div>
    </nav>
  );
}
  


export default Navbar_
