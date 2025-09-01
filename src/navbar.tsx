import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from './assets/resources/Logo.svg'
import navbarData from './data/navbar.json'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSignInClick = () => {
    navigate(navbarData.navigation.signInButton.href)
    closeMenu()
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt={navbarData.logo.alt} className="company-logo" />
          </NavLink>
        </div>

        <div className="navbar-right">
          <nav className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}>
            {navbarData.navigation.links.map((link) => (
              <NavLink 
                key={link.id}
                to={link.href} 
                className="nav-link" 
                onClick={closeMenu}
              >
                {link.text}
              </NavLink>
            ))}
            <button className="sign-in-btn sign-in-btn--mobile" onClick={handleSignInClick}>
              {navbarData.navigation.signInButton.text}
            </button>
          </nav>
          
          <button className="sign-in-btn sign-in-btn--desktop" onClick={handleSignInClick}>
            {navbarData.navigation.signInButton.text}
          </button>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label={navbarData.navigation.hamburger.ariaLabel}
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
        </div>
      </div>
      
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </header>
  )
}

export default Navbar
