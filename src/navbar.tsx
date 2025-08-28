import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-placeholder">
            <div className="logo-symbol"></div>
          </div>
          <span className="company-name">COMPANY</span>
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
