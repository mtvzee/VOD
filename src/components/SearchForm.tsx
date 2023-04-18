import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/components/SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.container}>
      <AiOutlineSearch className={styles.searchIcon} />
      <input
        type="search"
        placeholder="タイトルを検索"
        className={styles.searchInput}
      />
    </form>
  );
};
