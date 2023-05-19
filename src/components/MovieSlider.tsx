import throttle from 'lodash/throttle';
import { useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from '../styles/components/MovieSlider.module.css';
import { MovieSlide } from './MovieSlide';

export const MovieSlider = () => {
  const [sliderPosition, setSliderPosition] = useState<
    'first' | 'middle' | 'last'
  >('first');
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleClickChevron = (direction: string) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollPosition =
        direction === 'prev'
          ? scrollLeft - clientWidth * 0.92
          : scrollLeft + clientWidth * 0.92;
      sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const handleScrollX = throttle(() => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      if (scrollLeft === 0) {
        setSliderPosition('first');
      } else if (scrollLeft + clientWidth === scrollWidth) {
        setSliderPosition('last');
      } else {
        setSliderPosition('middle');
      }
    }
  }, 200);

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        ref={sliderRef}
        onScroll={handleScrollX}
      >
        {[...Array(12)].map((movie, index) => (
          <MovieSlide key={index} />
        ))}
      </div>
      {sliderPosition !== 'first' && (
        <button
          className={styles.prevBtn}
          onClick={() => handleClickChevron('prev')}
        >
          <BiChevronLeft className={styles.btnIcon} />
        </button>
      )}
      {sliderPosition !== 'last' && (
        <button
          className={styles.nextBtn}
          onClick={() => handleClickChevron('next')}
        >
          <BiChevronRight className={styles.btnIcon} />
        </button>
      )}
    </div>
  );
};
