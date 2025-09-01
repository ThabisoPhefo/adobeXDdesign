
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import officeImage from '../assets/resources/Img_001.jpg'
import aboutData from '../data/about.json'

const AboutUs = () => {
  return (
    <div className="about-us-simple">
      <div className="about-container">
        <div className="about-content-simple">
          <h1>{aboutData.hero.title}</h1>
          
          {aboutData.content.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.link ? (
                <>
                  {paragraph.text.split(paragraph.link.text)[0]}
                  <Link to={paragraph.link.href} className="about-link">{paragraph.link.text}</Link>
                  {paragraph.text.split(paragraph.link.text)[1]}
                </>
              ) : (
                paragraph.text
              )}
            </p>
          ))}

          <div className="about-image-simple">
            <LazyImage 
              src={officeImage} 
              alt={aboutData.content.image.alt}
            />
          </div>

          <h3>{aboutData.content.section.title}</h3>
          
          <ul className="about-list">
            {aboutData.content.section.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
