'use client';

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
// import { VscRepo, VscPerson, VscLocation, VscOrganization } from 'react-icons/vsc';
// import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';
import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  repos?: Repo[];
  user?: User;
}

const GithubPage = ({ repos = [], user }: GithubPageProps) => {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Arun-Kushwaha007';
  console.log('GitHub Username:', githubUsername);

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>Hi, I&apos;m Arun Kushwaha 👋</h1>
        <h3 className={styles.pageSubtitle}>
          Electronics & Communication Engineering | Full-Stack Dev | DevOps | DroneTech
        </h3>
        <p style={{ textAlign: 'center' }}>
          <img
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&color=F75C7E&center=true&vCenter=true&width=435&lines=Tech+Explorer;MERN+Stack+Dev;Drone+Tech+Enthusiast;DevOps+Learner;Open+Source+Lover+%F0%9F%A4%97"
            alt="Typing SVG"
          />
        </p>
      </div>

      <div className={styles.githubPage}>
        {user && (
          <div className={styles.profileSection}>
            <div className={styles.profileInfo}>
              {user.avatar_url && (
                <Image
                  src={user.avatar_url}
                  className={styles.avatar}
                  alt={user.login || 'GitHub User'}
                  width={100}
                  height={100}
                />
              )}
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          </div>
        )}

        {/* Uncomment when RepoCard is ready
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Popular Repositories</h3>
        </div>
        <div className={styles.reposContainer}>
          {repos.length > 0 ? (
            repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
          ) : (
            <p>No repositories to display.</p>
          )}
        </div> */}

        <div className={styles.contributions}>
          <h3 className={styles.sectionTitle}>GitHub Contributions</h3>
          <GitHubCalendar
            username={githubUsername}
            hideColorLegend
            hideMonthLabels
          />
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>🚀 Tech Stack</h3>
        </div>

        <div className={styles.techStackSection}>
          <h4>💻 Languages</h4>
          <p>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
            <img src="https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white" alt="C"/>
            <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white" alt="C++"/>
            <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"/>
          </p>

          <h4>🌐 Frontend</h4>
          <p>
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
            <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
            <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js"/>
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
          </p>

          <h4>🧠 Backend & Database</h4>
          <p>
            <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js"/>
            <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express"/>
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL"/>
          </p>

          <h4>🧰 DevOps & Tools</h4>
          <p>
            <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker"/>
            <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes"/>
            <img src="https://img.shields.io/badge/Vagrant-1563FF?style=flat-square&logo=vagrant&logoColor=white" alt="Vagrant"/>
            <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux"/>
            <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git"/>
            <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/>
          </p>

          <h4>🔬 Others</h4>
          <p>
            <img src="https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white" alt="Unity"/>
            <img src="https://img.shields.io/badge/Arduino-00979D?style=flat-square&logo=arduino&logoColor=white" alt="Arduino"/>
            <img src="https://img.shields.io/badge/Blender-F5792A?style=flat-square&logo=blender&logoColor=white" alt="Blender"/>
            <img src="https://img.shields.io/badge/OpenCV-27338e?style=flat-square&logo=opencv&logoColor=white" alt="OpenCV"/>
          </p>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>📈 GitHub Stats</h3>
        </div>
        <p style={{ textAlign: 'center' }}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Arun-kushwaha007&theme=tokyonight&hide_border=true&dates=all"
            width="47%"
            alt="Streak Stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=Arun-kushwaha007&show_icons=true&theme=tokyonight&hide_border=true"
            width="47%"
            alt="GitHub Stats"
          />
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arun-kushwaha007&langs_count=100&theme=tokyonight&hide_border=true"
            width="47%"
            alt="Top Languages"
          />
        </p>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>📫 Connect With Me</h3>
        </div>
        <p>
          <a href="https://www.linkedin.com/in/arun-kushwaha-394b5a340/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="mailto:arunsk1310@gmail.com" target="_blank" rel="noopener noreferrer">
            Gmail
          </a>{' '}
          |{' '}
          <a href="https://x.com/Arunkush00?s=08" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{' '}
          |{' '}
          <a href="https://www.instagram.com/_arun_kush.007/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>🎯 Goals for 2025</h3>
        </div>
        <ul className={styles.goalsList}>
          <li>✅ Build and deploy a full-stack drone-based disaster response system</li>
          <li>🚀 Master container orchestration with <strong>Kubernetes</strong></li>
          <li>🔬 Explore <strong>Edge AI</strong> and real-time object detection</li>
          <li>🕶️ Release an <strong>AR/VR simulation</strong> for engineering education</li>
          <li>🤝 Collaborate in more <strong>Open Source</strong> and <strong>Hackathons</strong></li>
        </ul>

        <p className={`${styles.footerText} ${styles.centerText}`}>
          🔥 Let&apos;s build the future together!
        </p>
      </div>
    </div>
  );
};

export default GithubPage;
