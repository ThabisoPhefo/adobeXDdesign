
import logo from '../assets/resources/Logo.svg'
import footerData from '../data/footer.json'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-section">
            <img src={logo} alt={footerData.logo.alt} className="footer-logo" />
          </div>
        </div>
        <div className="footer-right">
          <p>{footerData.copyright.text}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
