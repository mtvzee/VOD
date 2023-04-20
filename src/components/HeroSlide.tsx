import Image from 'next/image';
import { CiPlay1 } from 'react-icons/ci';
import { GoInfo } from 'react-icons/go';
import styles from '../styles/components/HeroSlide.module.css';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
const MOVIE_DATA = {
  title: 'スターウォーズ',
  overview:
    'この文章は仮の文章です。この文章は仮の文章です。この文章は仮の文章です。この文章は仮の文章です。この文章は仮の文章です。この文章は仮の文章です。',
};

export const HeroSlide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.descriptionGroup}>
          <h2 className={styles.title}>{MOVIE_DATA.title}</h2>
          <p className={styles.overview}>{MOVIE_DATA.overview}</p>
          <div className={styles.btnGroup}>
            <button className={`${styles.btn} ${styles.playBtn}`}>
              <CiPlay1 className={styles.btnIcon} />
              <span className={styles.btnText}>再生</span>
            </button>
            <button className={`${styles.btn} ${styles.detailBtn}`}>
              <GoInfo className={styles.btnIcon} />
              <span className={`${styles.btnText} ${styles.detailBtnText}`}>
                詳細
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.overlay} />
        <Image src={IMAGE_URL} alt="hero-image" fill className={styles.img} />
      </div>
    </div>
  );
};
