import styles from './styles.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loading;
