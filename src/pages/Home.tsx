import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import contentImage from '../assets/resources/Img_004.jpg'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <Carousel />
      
      {/* Text/Image Section with Office Space */}
      <section className="home-content">
        <div className="content-container">
          <div className="content-section">
            <div className="content-text">
              <h2>Justo petentium te vix, scripta regione urbanitas</h2>
              <p>
                Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. 
                Ferri euismod accusata te nec, summo accusam sit vix. Ad vix legere impetus, nam 
                consequat reformidans ut. No sit consul integre voluptatibus, omnium luctus ne mel. Et 
                ancillae recteque deterruisset sed, ea nec odio option, ferri assum eum et.
              </p>
              <ul className="feature-list">
                <li>• Te pri efficiendi assueverit, id molestie suavitate per</li>
                <li>• Te nam dolorem rationibus repudiandae, ne ius falli aliquip consequatur</li>
                <li>• Ut qui dicat copiosae interpretaris</li>
                <li>• Ut indoctum patrioque voluptatia duo, ut vis semper abhorreant</li>
              </ul>
              <button className="learn-more-btn" onClick={() => navigate('/about')}>Learn more</button>
            </div>
            <div className="content-image">
              <img 
                src={contentImage} 
                alt="Modern office space" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Woman and Overlay */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-overlay">
              <h1>Nulla sem urna, dictum sed nisl in, viverra rutrum neque</h1>
              <p>
                Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis 
                parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis 
                lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus 
                non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis 
                velit maximus ac. Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut 
                nisl placerat fringilla in sed diam.
              </p>
              <button className="login-btn">Log In</button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Content Section */}
      <section className="info-section">
        <div className="info-container">
          <h2>Justo petentium te vix, scripta regione urbanitas</h2>
          <p className="info-subtitle">Taria duo ut vis semper abhorreant</p>
          
          <div className="info-columns">
            <div className="info-column">
              <p>
                Pellentesque ac condimentum felis. Suspendisse vel 
                suscipit dolor, nec laoreet nulla. Nam auctor ultrices 
                dapibus. Donec ac interdum dui, quis finibus lectus. 
                Cras in ultrices neque. Curabitur eget turpis iaculis 
                diam congue sagittis a vel ligula. Mauris ut arcu ex. 
                Nullam quis orci ante. Nunc felis massa, posuere non 
                gravida in, commodo in arcu. In feugiat magna non 
                volutpat faucibus. Nam aliquam justo nec aliquam 
                iaculis. Integer laoreet pulvinar elit pulvinar 
                fermentum. Morbi vehicula sodales nunc ac varius. 
                Proin porttitor porttitor libero vel pharetra.
              </p>
              <p>
                Cras sit amet dapibus magna. Orci varius natoque 
                penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>
            
            <div className="info-column">
              <p>
                ridiculus mus. Donec finibus nulla quis lorem mollis 
                lacinia. Fusce ut arcu ligula. Pellentesque augue ex, 
                pellentesque ut maximus non, eleifend ut lorem. 
                Vestibulum rutrum malesuada turpis, molestie mattis 
                velit maximus ac. Quisque iaculis hendrerit ex et 
                tincidunt. Aenean eu magna ut nisl placerat fringilla in 
                sed diam. Suspendisse tristique vel dui nec semper. 
                Cras mattis ligula quis fermentum suscipit. Proin et 
                elementum arcu, sit amet porttitor diam. Curabitur 
                euismod, erat vitae tristique volutpat, augue lectus 
                dignissim justo, at faucibus orci est a elit.
              </p>
              <p>
                Sed sed sapien pretium, maximus felis vel, mollis elit. Sed 
                libero justo, lobortis sit amet suscipit non, auctor non
              </p>
            </div>
            
            <div className="info-column">
              <p>
                libero. Maecenas quis nisl eget enim porta blandit a nec 
                sapien. Mauris porttitor lorem et egestas euismod. 
                Donec molestie tempor nibh, nec venenatis arcu 
                ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut 
                tortor scelerisque, et iaculis nunc ornare. Pellentesque 
                non nunc nulla. Interdum et malesuada fames ac ante 
                ipsum primis in faucibus. Aenean et sodales diam, 
                ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut 
                tortor scelerisque, et iaculis nunc ornare. Pellentesque 
                non nunc nulla. Interdum et malesuada fames ac ante 
                ipsum primis in faucibus. Aenean et sodales diam
              </p>
            </div>
          </div>
          
          <button className="contact-btn" onClick={() => navigate('/contact')}>Contact us</button>
        </div>
      </section>
    </div>
  )
}

export default Home
