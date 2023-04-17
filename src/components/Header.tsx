import { useEffect, useState } from 'react';
import styles from '../styles/components/Header.module.css';
import { Profile } from './Profile';
import { SearchForm } from './SearchForm';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // ヘッダーのUIを変更するために、スクロールを感知する機能
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled && styles.isScrolled}`}>
      <div className={`${styles.container} ${isScrolled && styles.isScrolled}`}>
        <h1 className={styles.logo}>VOD X</h1>
        <div className={styles.headerRight}>
          <SearchForm />
          <Profile />
        </div>
      </div>
    </header>
  );
};
