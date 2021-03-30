import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
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
            />
          )}
        </div>
      ))}
      {slides.length > 1 && (
        <>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </>
      )}

      <style jsx>{`
        .slider {
          /* position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center; */
        }

        .image {
          /* width: 1000px;
          height: 600px;
          border-radius: 10px; */
        }

        .right-arrow {
          position: absolute;
          top: 50%;
          left: 32px;
          front-size: 3rem;
          color #000;
          z-index: 10;
          cursor: pointer;
          user-select: none;
        }
        .left-arrow {
          position: absolute;
          top: 50%;
          left: 32px;
          front-size: 3rem;
          color #000;
          z-index: 10;
          cursor: pointer;
          user-select: none;
        }

        .slide{
          opacity: 0;
          transition-duration: 1s ease;
        }

        .slide.active {
          opacity: 1;
          transition-duration: 1s;
          /* transform: scale(1.08); */
        }

      `}</style>
    </section>
  );
}
