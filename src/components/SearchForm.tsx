import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/components/SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <AiOutlineSearch className={styles.searchIcon} />
      <input
        type="search"
        placeholder="タイトルを検索"
        className={styles.searchInput}
      />
      <i className={styles.searchBg} />
    </form>
  );
};
