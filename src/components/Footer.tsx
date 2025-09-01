
import footerData from '../data/footer.json'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>
            Copyright ©2025 AVAMAE. All rights reserved. | 
            <a href={footerData.link.href} className="footer-link" target="_blank" rel="noopener noreferrer">
              {footerData.link.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
