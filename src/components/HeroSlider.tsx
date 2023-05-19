import { useEffect, useRef, useState } from 'react';
import { TbCircleChevronLeft, TbCircleChevronRight } from 'react-icons/tb';
import styles from '../styles/components/HeroSlider.module.css';
import { HeroSlide } from './HeroSlide';
import throttle from 'lodash/throttle';

const images = [1, 2, 3];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // currentIndexが更新されるとそのインデックスのスライドまで移動する
  useEffect(() => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      sliderRef.current.scrollTo({
        left: clientWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // 10秒間隔でスライドが自動的に遷移する
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(timerId);
  }, []);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // ホイール等で横方向に移動した際にインデックスを更新できないので、スクロール時にスライドのインデックスを検知して更新する
  const handleScrollX = throttle(() => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollPosition = Math.floor(scrollLeft / clientWidth);
      if (scrollLeft % clientWidth === 0) {
        setCurrentIndex(scrollPosition);
      }
    }
  }, 200);

  return (
    <div className={styles.slider}>
      <div
        className={styles.heroContainer}
        ref={sliderRef}
        onScroll={handleScrollX}
      >
        {images.map((slide) => (
          <HeroSlide key={slide} />
        ))}
      </div>
      <button className={styles.prevBtn} onClick={handleClickPrev}>
        <TbCircleChevronLeft className={styles.btnIcon} />
      </button>
      <button className={styles.nextBtn} onClick={handleClickNext}>
        <TbCircleChevronRight className={styles.btnIcon} />
      </button>
      <div className={styles.pagination}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index && styles.active
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
