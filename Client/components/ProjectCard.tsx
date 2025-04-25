import Image from 'next/image';
import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={50}
            height={50}
            className={styles.logo}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          {project.techStack.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <Image
                src={tech.logo}
                alt={tech.name}
                width={20}
                height={20}
                className={styles.techLogo}
              />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Project Status */}
        <div className={styles.status}>
          <span>Status: {project.status}</span>
        </div>

        {/* Optional Screenshot */}
        {project.screenshot && (
          <div className={styles.screenshot}>
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              width={100}
              height={100}
              className={styles.screenshotImage}
            />
          </div>
        )}

        {/* Start and End Dates */}
        {project.startDate && (
          <div className={styles.dates}>
            <span>Started: {project.startDate}</span>
            {project.endDate && <span> - Ended: {project.endDate}</span>}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
