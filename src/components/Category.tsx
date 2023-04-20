import styles from '../styles/components/Category.module.css';
import { MovieSlider } from './MovieSlider';

export const Category = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>人気急上昇</h2>
      <MovieSlider />
    </section>
  );
};
