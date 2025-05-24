import styles from '@/styles/ProjectCardSkeleton.module.css';

const ProjectCardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.content}>
        <div className={`${styles.logoWrapper} skeleton`}></div>
        <div className={`${styles.title} skeleton`}></div>
        <div className={`${styles.descriptionLine1} skeleton`}></div>
        <div className={`${styles.descriptionLine2} skeleton`}></div>
        <div className={styles.techStack}>
          <div className={`${styles.techItem} skeleton`}></div>
          <div className={`${styles.techItem} skeleton`}></div>
          <div className={`${styles.techItem} skeleton`}></div>
        </div>
        <div className={`${styles.status} skeleton`}></div>
        <div className={`${styles.dates} skeleton`}></div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
