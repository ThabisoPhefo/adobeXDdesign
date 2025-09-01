import type { InfoSection as InfoSectionType } from '../types';
import Button from './Button';
import Section from './Section';

interface InfoSectionProps {
  data: InfoSectionType;
}

const InfoSection: React.FC<InfoSectionProps> = ({ data }) => {
  return (
    <Section backgroundColor="white" className="info-section">
      <div className="info-section__header">
        <h2 className="info-section__title">{data.title}</h2>
        <p className="info-section__subtitle">{data.subtitle}</p>
      </div>
      
      <div className="info-section__columns">
        {data.columns.map((column, index) => (
          <div key={index} className="info-section__column">
            {column.text.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="info-section__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
      
      <div className="info-section__cta-wrapper">
        <Button 
          text={data.ctaText}
          link={data.ctaLink}
          className="info-section__cta"
        />
      </div>
    </Section>
  );
};

export default InfoSection;