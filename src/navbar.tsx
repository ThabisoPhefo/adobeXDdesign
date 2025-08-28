import { NavLink } from 'react-router-dom'
import './navbar.css'
import logo from './assets/resources/Logo.svg'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
                  <div className="navbar-left">
            <img src={logo} alt="Company Logo" className="company-logo" />
          </div>

        <div className="navbar-right">
          <nav className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About us</NavLink>
            <NavLink to="/contact" className="nav-link">Contact us</NavLink>
          </nav>
          <button className="sign-in-btn">Sign in</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
