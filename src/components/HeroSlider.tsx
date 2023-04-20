import { TbCircleChevronLeft, TbCircleChevronRight } from 'react-icons/tb';
import styles from '../styles/components/HeroSlider.module.css';
import { HeroSlide } from './HeroSlide';

export const HeroSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        {[1, 2, 3].map((slide) => (
          <HeroSlide key={slide} />
        ))}
      </div>
      <button className={styles.prevBtn}>
        <TbCircleChevronLeft className={styles.btnIcon} />
      </button>
      <button className={styles.nextBtn}>
        <TbCircleChevronRight className={styles.btnIcon} />
      </button>
    </div>
  );
};
