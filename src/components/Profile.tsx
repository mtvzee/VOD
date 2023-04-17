import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import styles from '../styles/components/Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src="/unknown.png" alt="avatar" fill className={styles.img} />
      </div>

      <ul className={styles.box}>
        <li className={styles.boxItem}>
          <AiOutlineEdit className={styles.icon} />
          <Link href="/setting" className={styles.link}>
            プロフィールの変更
          </Link>
        </li>
        <li className={styles.boxItem}>
          <RiLogoutBoxRLine className={styles.icon} />
          <span className={styles.text}>ログアウト</span>
        </li>
      </ul>
    </div>
  );
};
