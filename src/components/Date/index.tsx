import { Link } from 'react-router-dom';
import styles from './index.module.scss';

interface Props {
   dates: {
      date: string;
      active: boolean;
      href: string;
   }[];
}

export default function Date({ dates }: Props) {
   return <>
    <div className={styles.date}>
      {dates.map((date) => (
        <Link replace to={date.href} key={date.date} className={`${styles.text} ${date.active ? styles.active : ''}`}>{date.date}</Link>
      ))}
    </div>
   </>
}
