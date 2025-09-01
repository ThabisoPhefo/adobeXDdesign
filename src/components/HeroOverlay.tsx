import type { CallToActionSection } from '../types';
import Button from './Button';

interface HeroOverlayProps {
  data: CallToActionSection;
}

const HeroOverlay: React.FC<HeroOverlayProps> = ({ data }) => {
  return (
    <section 
      className="hero-overlay"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
      }}
    >
      <div className="hero-overlay__container">
        <div className="hero-overlay__content">
          <div className="hero-overlay__card">
            <h1 className="hero-overlay__title">{data.title}</h1>
            <p className="hero-overlay__description">{data.description}</p>
            <Button 
              text={data.ctaText}
              link={data.ctaLink}
              className="hero-overlay__cta"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOverlay;