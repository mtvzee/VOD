import throttle from 'lodash/throttle';
import { useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from '../styles/components/MovieSlider.module.css';
import { MovieSlide } from './MovieSlide';

export const MovieSlider = () => {
  const [scrollPosition, setScrollPosition] = useState<
    'first' | 'middle' | 'last'
  >('first');
  const sliderRef = useRef<HTMLDivElement>(null);

  // directionでどちらにスライドさせるか分岐させて、画面幅とスライダー要素のx方向の現在位置から次の移動を算出して、スライドを移動させる関数
  const handleClickChevron = (direction: 'prev' | 'next') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollPosition =
        direction === 'prev'
          ? scrollLeft - clientWidth * 0.92
          : scrollLeft + clientWidth * 0.92;
      sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  // 現在のスライドの位置によって移動ボタンの表示・非表示を切り替えるために、現在のスライドの位置を更新する関数
  const handleScrollPosition = throttle(() => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      if (scrollLeft <= 0) {
        setScrollPosition('first');
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        setScrollPosition('last');
      } else {
        setScrollPosition('middle');
      }
    }
  }, 200);

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        ref={sliderRef}
        onScroll={handleScrollPosition}
      >
        {[...Array(12)].map((_, index) => (
          <MovieSlide key={index} />
        ))}
      </div>
      {scrollPosition !== 'first' && (
        <button
          className={styles.prevBtn}
          onClick={() => handleClickChevron('prev')}
        >
          <BiChevronLeft className={styles.btnIcon} />
        </button>
      )}
      {scrollPosition !== 'last' && (
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
