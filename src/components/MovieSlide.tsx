import Image from 'next/image';
import styles from '../styles/components/MovieSlide.module.css';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

export const MovieSlide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={IMAGE_URL} alt="thumbnail" fill className={styles.img} />
      </div>
    </div>
  );
};
