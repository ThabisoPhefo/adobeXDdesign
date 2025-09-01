import Carousel from '../components/Carousel';
import ContentSection from '../components/ContentSection';
import HeroOverlay from '../components/HeroOverlay';
import InfoSection from '../components/InfoSection';
import { useHomeData } from '../hooks/useHomeData';

const Home: React.FC = () => {
  const { data, loading, error } = useHomeData();

  if (loading) {
    return (
      <div className="home">
        <div className="home__loading">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="home">
        <div className="home__error">
          <p>Error loading page data: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel />
      
      {/* Text/Image Content Section */}
      <ContentSection data={data.contentSection} />

      {/* Hero Overlay Section */}
      <HeroOverlay data={data.callToActionSection} />

      {/* Three Column Info Section */}
      <InfoSection data={data.infoSection} />
    </div>
  );
};

export default Home;