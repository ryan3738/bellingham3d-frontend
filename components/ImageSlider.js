import { useState } from 'react';
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ButtonIconStyles, ColorStateStyles } from './styles/StateStyles';

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

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
            <img
              src={slide.image.publicUrlTransformed}
              alt={slide.altText}
              className="image"
              loading="lazy"
            />
          )}
        </div>
      ))}
      {slides.length > 1 && (
        <>
          <div className="slider-nav">
            <div className="left-arrow">
              <ButtonIconStyles>
                <IconContext.Provider value={{ size: '42px' }}>
                  <FaArrowLeft onClick={prevSlide} />
                </IconContext.Provider>
              </ButtonIconStyles>
            </div>
            <div className="right-arrow" title="Next Slide">
              <ButtonIconStyles>
                <IconContext.Provider value={{ size: '42px' }}>
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
          justify-content: center;
          align-items: center;
          align-content: center;
          text-align: center;
        }
        .image {
          /* width: 1000px;
          height: 600px;
          border-radius: 10px; */
        }

        .right-arrow,
        .left-arrow {
          width: 100%;
          height: auto;
          top: 50%;
          left: 32px;
          z-index: 10;
          user-select: none;
          color: var(--navyBlue);
        }

        .slide {
          opacity: 0;
          transition-duration: 0.5s ease;
        }

        .slide.active {
          opacity: 1;
          transition-duration: 0.5s;
          /* transform: scale(1.08); */
        }
      `}</style>
    </div>
  );
}
