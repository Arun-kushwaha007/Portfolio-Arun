import Image from 'next/image';
import { VscMenu } from 'react-icons/vsc'; // Using react-icons for a menu icon

import styles from '@/styles/Titlebar.module.css';

interface TitlebarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean; // To set aria-expanded
}

const Titlebar: React.FC<TitlebarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <section className={styles.titlebar}>
      {onToggleSidebar && (
        <button
          className={styles.hamburgerButton}
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
        >
          <VscMenu size={20} />
        </button>
      )}
      <Image
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Arun Kushwaha - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
