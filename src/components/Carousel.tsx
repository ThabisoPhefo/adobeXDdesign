import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


interface CarouselItem {
  ImageUrl: string
  Title: string
  Subtitle?: string
}

const Carousel = () => {
  const navigate = useNavigate()
  const [items, setItems] = useState<CarouselItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
        if (response.data.Details && response.data.Details.length > 0) {
          // Filter to only show the first 2 images (swiper_image_1.jpg and swiper_image_2.jpg)
          const filteredItems = response.data.Details.filter((item: CarouselItem) => 
            item.ImageUrl.includes('swiper_image_1.jpg') || 
            item.ImageUrl.includes('swiper_image_2.jpg')
          ).slice(0, 2)
          setItems(filteredItems)
        } else {
          // Fallback data with only 2 specific images
          setItems([
            {
              ImageUrl: 'https://interview-assessment.api.avamae.co.uk/Images/swiper_image_1.jpg',
              Title: 'Lorem ipsum dolor',
              Subtitle: 'Quem vide tincidunt pri ei, id mea omnium denique.'
            },
            {
              ImageUrl: 'https://interview-assessment.api.avamae.co.uk/Images/swiper_image_2.jpg',
              Title: 'Ut enim blandit',
              Subtitle: 'Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare'
            }
          ])
        }
        setLoading(false)
      } catch (err) {
        console.error('Error fetching carousel data:', err)
        // Fallback data with only 2 specific images
        setItems([
          {
            ImageUrl: 'https://interview-assessment.api.avamae.co.uk/Images/swiper_image_1.jpg',
            Title: 'Lorem ipsum dolor',
            Subtitle: 'Quem vide tincidunt pri ei, id mea omnium denique.'
          },
          {
            ImageUrl: 'https://interview-assessment.api.avamae.co.uk/Images/swiper_image_2.jpg',
            Title: 'Ut enim blandit',
            Subtitle: 'Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare'
          }
        ])
        setError('Using fallback data')
        setLoading(false)
      }
    }

    fetchCarouselData()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  if (loading) {
    return (
      <div className="carousel-container">
        <div className="carousel-loading">Loading...</div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="carousel-container">
        <div className="carousel-error">No carousel data available</div>
      </div>
    )
  }

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img 
          src={items[currentIndex].ImageUrl} 
          alt={items[currentIndex].Title}
          className="carousel-image"
        />
        <div className="carousel-overlay">
          <div className="carousel-content">
            <h1 className="carousel-title">{items[currentIndex].Title}</h1>
            {items[currentIndex].Subtitle && (
              <p className="carousel-subtitle">{items[currentIndex].Subtitle}</p>
            )}
            <button className="carousel-cta" onClick={() => navigate('/contact')}>Contact us</button>
          </div>
        </div>
      </div>
      
      {items.length > 1 && (
        <>
          <button className="carousel-nav prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="carousel-nav next" onClick={nextSlide}>
            &#8250;
          </button>
          
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
