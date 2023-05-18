import { useRef, useState } from 'react';
import { TbCircleChevronLeft, TbCircleChevronRight } from 'react-icons/tb';
import styles from '../styles/components/HeroSlider.module.css';
import { HeroSlide } from './HeroSlide';
import throttle from 'lodash/throttle';

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleClickChevron = (direction: string) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const sliderPosition =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: sliderPosition, behavior: 'smooth' });
    }
  };

  const handleClickDot = (index: number) => {
    setCurrentIndex(index);
  };

  const handleScrollX = throttle(() => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollPosition = Math.floor(scrollLeft / clientWidth);
      setCurrentIndex(scrollPosition);
    }
  }, 300);

  return (
    <div className={styles.slider}>
      <div
        className={styles.heroContainer}
        ref={sliderRef}
        onScroll={handleScrollX}
      >
        {[1, 2, 3].map((slide) => (
          <HeroSlide key={slide} />
        ))}
      </div>
      <button
        className={styles.prevBtn}
        onClick={() => handleClickChevron('left')}
      >
        <TbCircleChevronLeft className={styles.btnIcon} />
      </button>
      <button
        className={styles.nextBtn}
        onClick={() => handleClickChevron('right')}
      >
        <TbCircleChevronRight className={styles.btnIcon} />
      </button>
      <div className={styles.pagination}>
        {[1, 2, 3].map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index && styles.active
            }`}
          />
        ))}
      </div>
    </div>
  );
};
