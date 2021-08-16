import Image from 'next/image';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ButtonIconStyles } from './styles/StateStyles';

export default function ImageSlider({ slides, alt }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // Check if images are passed in
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <Image
              src={slide.image.publicUrlTransformed}
              alt={alt}
              loading="lazy"
              layout="intrinsic"
              height="600"
              width="600"
              // objectFit="cover"
            />
          )}
        </div>
      ))}
      {slides.length > 1 && (
        <>
          <div className="slider-nav">
            <div className="left-arrow">
              <ButtonIconStyles title="Previous Slide">
                <IconContext.Provider value={{ size: '24px' }}>
                  <FaArrowLeft onClick={prevSlide} />
                </IconContext.Provider>
              </ButtonIconStyles>
            </div>
            {slides.map((slide, index) => (
              <button
                className="slider-pagination-bullet-wrapper"
                aria-label={`Go to slide ${index + 1} of ${slides.length}`}
                title={`Go to slide ${index + 1} of ${slides.length}`}
                key={index}
                type="button"
                disabled={index === current}
                onClick={() => setCurrent(index)}
              >
                <div
                  className={`slider-pagination-bullet ${
                    index === current ? ' active' : ''
                  }`}
                />
              </button>
            ))}
            <div className="right-arrow">
              <ButtonIconStyles title="Next Slide">
                <IconContext.Provider value={{ size: '24px' }}>
                  <FaArrowRight onClick={nextSlide} />
                </IconContext.Provider>
              </ButtonIconStyles>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .slider {
          height: auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          background: none;
        }
        .slider-nav {
          height: auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          text-align: center;
        }
        .image {
          /* width: 1000px;
          height: 600px;
          border-radius: 10px; */
        }
        .slider-pagination-bullet-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          min-width: 44px;
          min-height: 44px;
        }

        .slider-pagination-bullet {
          transition: opacity 500ms ease-in-out;
          background: black;
          opacity: 0.36;
          height: 12px;
          width: 12px;
          border-radius: 6px;
        }

        .slider-pagination-bullet.active {
          opacity: 1;
        }

        .right-arrow,
        .left-arrow {
          width: 44px;
          height: 44px;
          top: 50%;
          left: 32px;
          z-index: 10;
          user-select: none;
          color: var(--navyBlue);
        }

        .slide {
          opacity: 0;
          transition: opacity 500ms ease-in-out;
        }

        .slide.active {
          opacity: 1;
          transition-duration: 500ms;

          /* transform: scale(1.08); */
        }
      `}</style>
    </div>
  );
}
