import './navbar.css';

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
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">About us</a>
            <a href="#" className="nav-link">Contact us</a>
          </nav>
          <button className="sign-in-btn">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
