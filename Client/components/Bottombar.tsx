import {
  VscBell,
  VscCheck,
  VscError,
  VscWarning,
  VscSourceControl,
} from 'react-icons/vsc';
import { SiNextdotjs } from 'react-icons/si';

import styles from '@/styles/Bottombar.module.css';

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://portfolio-arun-qdkm.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className={`${styles.section} ${styles.linkSection}`} // Added specific class for links
        >
          <VscSourceControl className={styles.icon} aria-hidden="true" />
          <p>main</p>
        </a>
        {/* Assuming this section is non-interactive for now */}
        <div className={`${styles.section} ${styles.nonInteractive}`}>
          <VscError className={styles.icon} aria-hidden="true" />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <VscWarning className={styles.icon} aria-hidden="true" />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        {/* Assuming this section is non-interactive */}
        <div className={`${styles.section} ${styles.nonInteractive}`}>
          <SiNextdotjs className={styles.icon} aria-hidden="true" />
          <p>Powered by Next.js</p>
        </div>
        {/* Assuming this section is non-interactive */}
        <div className={`${styles.section} ${styles.nonInteractive}`}>
          <VscCheck className={styles.icon} aria-hidden="true" />
          <p>Prettier</p>
        </div>
        <button
          className={`${styles.section} ${styles.buttonSection}`}
          aria-label="Toggle notifications panel"
        >
          <VscBell aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

export default Bottombar;
