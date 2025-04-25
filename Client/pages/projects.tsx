import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1); // Start with full opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const opacity = 1 - (scrollPosition / maxScroll); // Calculate opacity based on scroll position

      // Set opacity to fade out as user scrolls down
      setScrollOpacity(Math.max(opacity, 0)); // Ensure opacity doesn't go below 0
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects & Contributions</h1>
      <p className={styles.pageSubtitle}>
        As a passionate web developer and technology enthusiast, I have worked on a range of projects across various domains. Below are some of the key projects that reflect my skills in web development, machine learning, game development, and real-time systems.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className={styles.scrollDownIndicator} 
        style={{ opacity: scrollOpacity }} // Dynamic opacity based on scroll
      >
        <div className={styles.scrollText}>.</div>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'My Projects' },
  };
}

export default ProjectsPage;
