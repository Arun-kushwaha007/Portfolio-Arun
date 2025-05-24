import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton'; // Import skeleton
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate 1.5 second load time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't run scroll effect if loading

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
  }, [isLoading]); // Added isLoading to dependency array

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects & Contributions</h1>
      <p className={styles.pageSubtitle}>
        As a passionate web developer and technology enthusiast, I have worked on a range of projects across various domains. Below are some of the key projects that reflect my skills in web development, machine learning, game development, and real-time systems.
      </p>

      <div className={styles.container}>
        {isLoading ? (
          Array.from({ length: projects.length > 0 ? projects.length : 3 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        )}
      </div>

      {/* Scroll Down Indicator - only show if not loading */}
      {!isLoading && (
        <div 
          className={styles.scrollDownIndicator} 
          style={{ opacity: scrollOpacity }} 
        >
          <div className={styles.scrollText}>.</div>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      )}
    </div>
  );
};

// getStaticProps remains the same, as data is available at build time.
// The loading simulation is purely for demonstrating skeletons.
export async function getStaticProps() {
  return {
    props: { title: 'My Projects' },
  };
}

export default ProjectsPage;
