import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
} from 'react-icons/vsc';

import { useRef } from 'react'; // Removed useEffect
import styles from '@/styles/Sidebar.module.css';

interface SidebarProps {
  isSidebarOpen: boolean;
  // onCloseSidebar?: () => void; // We'll use link clicks to close for now via Layout
}

const navItems = {
  top: [
    { Icon: VscFiles, path: '/', label: 'Home' },
    { Icon: VscGithubAlt, path: '/github', label: 'GitHub' },
    { Icon: VscCode, path: '/projects', label: 'Projects' },
    { Icon: VscMail, path: '/contact', label: 'Contact' },
  ],
  bottom: [
    { Icon: VscAccount, path: '/about', label: 'About Me' },
    { Icon: VscSettings, path: '/settings', label: 'Settings' },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const router = useRouter();
  const sidebarRef = useRef<HTMLElement>(null);

  // Logic for closing sidebar when clicking outside can be complex due to event propagation
  // and interaction with the hamburger button. The backdrop in Layout.tsx handles this.

  const renderNavItems = (items: typeof navItems.top) =>
    items.map(({ Icon, path, label }) => (
      // onClick on Link in Layout.tsx will trigger route change, which closes sidebar
      <Link href={path} key={path} aria-label={label} >
        <div
          className={`${styles.iconContainer} ${
            router.pathname === path ? styles.active : ''
          }`}
        >
          <Icon
            size={20}
            className={styles.icon}
            style={{
              fill: router.pathname === path ? 'var(--icon-active-color)' : 'var(--icon-inactive-color)',
            }}
          />
        </div>
      </Link>
    ));
  
  // Add conditional class based on isSidebarOpen
  // The actual display logic (display:none vs display:flex) will be in CSS media queries
  const sidebarClasses = `${styles.sidebar} ${isSidebarOpen && window.innerWidth <= 768 ? styles.sidebarOpen : ''}`;

  return (
    <aside ref={sidebarRef} className={sidebarClasses}>
      <nav aria-label="Main navigation" className={styles.sidebarNav}>
        <div className={styles.sidebarTop}>{renderNavItems(navItems.top)}</div>
        <div className={styles.sidebarBottom}>
          {renderNavItems(navItems.bottom)}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
