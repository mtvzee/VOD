import { TbCircleChevronLeft, TbCircleChevronRight } from 'react-icons/tb';
import styles from '../styles/components/MovieSlider.module.css';
import { MovieSlide } from './MovieSlide';

export const MovieSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        {[...Array(12)].map((movie, index) => (
          <MovieSlide key={index} />
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
