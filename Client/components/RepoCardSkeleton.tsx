import styles from '@/styles/RepoCardSkeleton.module.css';

const RepoCardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.header}>
        <div className={`${styles.title} skeleton`}></div>
        <div className={`${styles.language} skeleton`}></div>
      </div>
      <div className={`${styles.descriptionLine1} skeleton`}></div>
      <div className={`${styles.descriptionLine2} skeleton`}></div>
      <div className={styles.stats}>
        <div className={styles.statGroup1}>
          <div className={`${styles.statItem} skeleton`}></div>
          <div className={`${styles.statItem} skeleton`}></div>
          <div className={`${styles.statItem} skeleton`}></div>
        </div>
        <div className={styles.statGroup2}>
          <div className={`${styles.iconLink} skeleton`}></div>
          <div className={`${styles.iconLink} skeleton`}></div>
        </div>
      </div>
    </div>
  );
};

export default RepoCardSkeleton;
