

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Our Company</h1>
          <p>Discover our story, mission, and the values that drive us forward.</p>
        </div>
      </div>

      <section className="about-content">
        <div className="content-container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
              />
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>Innovation</h3>
                <p>We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We believe in the power of teamwork and foster an environment of open communication.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⭐</div>
                <h3>Excellence</h3>
                <p>We strive for excellence in everything we do, delivering quality results that exceed expectations.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <h3>Growth</h3>
                <p>We are committed to continuous learning and development, both personally and professionally.</p>
              </div>
            </div>
          </div>

          <div className="mission-section">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To empower businesses and individuals through innovative technology solutions that 
                simplify complex challenges and create meaningful impact in the world.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Team Members</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
