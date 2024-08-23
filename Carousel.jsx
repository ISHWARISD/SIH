import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(null);

  const slides = [
    {
      image: '/images/proim0.jpg',
      title: t('carousel.projects.title'),
      description: t('carousel.projects.description')
    },
    {
      image: '/images/proim1.jpg',
      title: t('carousel.urbanHydroponics.title'),
      description: t('carousel.urbanHydroponics.description')
    },
    {
      image: '/images/proim3.jpg',
      title: t('carousel.trainingWorkshops.title'),
      description: t('carousel.trainingWorkshops.description')
    },
    {
      image: '/images/proim4.jpg',
      title: t('carousel.schoolGardens.title'),
      description: t('carousel.schoolGardens.description')
    },
    {
      image: '/images/proim5.jpg',
      title: t('carousel.farmerSupport.title'),
      description: t('carousel.farmerSupport.description')
    }
  ];

  const handleSlideClick = (index) => {
    setActiveSlide(activeSlide === index ? null : index);
  };

  return (
    <div className="w-3/4 mx-auto my-8 relative bg-cream">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={2000} // 2-second interval
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 text-2xl z-10"
            >
              <FaChevronLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 text-2xl z-10"
            >
              <FaChevronRight />
            </button>
          )
        }
      >
        {slides.map((slide, index) => (
          <div key={index} onClick={() => handleSlideClick(index)} className="relative group">
            <img src={slide.image} alt={slide.title} className="w-full h-auto object-cover group-hover:blur-[5px]" />
            <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-50 text-white flex justify-center items-center">
              <div className="text-center p-8 opacity-0 group-hover:opacity-100 hidden sm:block"> {/* Hide on small screens */}
                <h3 className="text-6xl font-bold mb-4">{slide.title}</h3>
                <p className="text-4xl leading-relaxed mt-4">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
