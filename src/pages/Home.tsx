import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <Carousel />
      
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern office space" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
