import './Footer.css'
import logo from '../assets/resources/Logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-section">
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </div>
        </div>
        <div className="footer-right">
          <p>&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
