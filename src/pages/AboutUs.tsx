
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
              {paragraph.boldText ? (
                <>
                  <strong>{paragraph.boldText}</strong>
                  {paragraph.text.substring(paragraph.boldText.length)}
                  {paragraph.link && (
                    <>
                      <Link to={paragraph.link.href} className="about-link">{paragraph.link.text}</Link>
                      {paragraph.text.split(paragraph.link.text)[1]}
                    </>
                  )}
                </>
              ) : (
                paragraph.link ? (
                  <>
                    {paragraph.text.split(paragraph.link.text)[0]}
                    <Link to={paragraph.link.href} className="about-link">{paragraph.link.text}</Link>
                    {paragraph.text.split(paragraph.link.text)[1]}
                  </>
                ) : (
                  paragraph.text
                )
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

          {/* Additional Content */}
          {aboutData.content.additionalContent.paragraphs.map((paragraph, index) => (
            <p key={`additional-${index}`}>
              {paragraph.text}
            </p>
          ))}

          <ul className="about-list">
            {aboutData.content.additionalContent.list.map((item, index) => (
              <li key={`additional-list-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
