import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar on route change or if window is resized to be larger
  useEffect(() => {
    const closeSidebarOnDesktop = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      // Close sidebar on route change
      setIsSidebarOpen(false); 
    }
    
    window.addEventListener('resize', closeSidebarOnDesktop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]); // Only trigger for pathname change for closing on navigation

  useEffect(() => {
    const closeSidebarOnDesktop = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', closeSidebarOnDesktop);
    return () => window.removeEventListener('resize', closeSidebarOnDesktop);
  }, [isSidebarOpen]);


  // Reset scroll on main content area
  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [router.pathname]);

  return (
    <>
      <Titlebar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className={styles.main}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        {isSidebarOpen && window.innerWidth <= 768 && (
          <div className={styles.backdrop} onClick={toggleSidebar} />
        )}
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
