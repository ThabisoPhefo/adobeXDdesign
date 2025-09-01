import type { ContentSection as ContentSectionType } from '../types';
import Button from './Button';
import Section from './Section';
import contentImage from '../assets/resources/Img_004.jpg';

interface ContentSectionProps {
  data: ContentSectionType;
}

const ContentSection: React.FC<ContentSectionProps> = ({ data }) => {
  return (
    <Section backgroundColor="light" className="content-section">
      <div className="content-section__grid">
        <div className="content-section__text">
          <h2 className="content-section__title">{data.title}</h2>
          <p className="content-section__description">{data.description}</p>
          
          {data.features && data.features.length > 0 && (
            <ul className="content-section__features">
              {data.features.map((feature, index) => (
                <li key={index} className="content-section__feature">
                  {feature}
                </li>
              ))}
            </ul>
          )}
          
          <Button 
            text={data.ctaText}
            link={data.ctaLink}
            className="content-section__cta"
          />
        </div>
        
        <div className="content-section__image">
          <img 
            src={contentImage} 
            alt={data.imageAlt}
            className="content-section__img"
          />
        </div>
      </div>
    </Section>
  );
};

export default ContentSection;