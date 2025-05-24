import styles from '@/styles/ArticleCardSkeleton.module.css';

const ArticleCardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={`${styles.imageWrapper} skeleton`}></div>
      <div className={styles.content}>
        <div className={`${styles.title} skeleton`}></div>
        <div className={`${styles.descriptionLine1} skeleton`}></div>
        <div className={`${styles.descriptionLine2} skeleton`}></div>
        <div className={styles.footer}>
          <div className={`${styles.stat} skeleton`}></div>
          <div className={`${styles.stat} skeleton`}></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
