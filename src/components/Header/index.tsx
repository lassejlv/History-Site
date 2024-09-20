import styles from './index.module.scss';

interface Props {
  title: string;
  description: string;
}

export default function Header({ title, description }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.card}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
