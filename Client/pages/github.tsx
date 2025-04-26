'use client';

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { User } from '@/types'; // Only User imported now
import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  user?: User;
}

const GithubPage = ({ user }: GithubPageProps) => {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Arun-Kushwaha007';
  console.log('GitHub Username:', githubUsername);

  const generateBadgeUrl = (tech: string, color: string, logoColor = 'white') => {
    const logoName = tech
      .replace(/\+/g, 'plusplus')
      .replace(/\./g, '')
      .replace(/\s/g, '')
      .replace(/_/g, '');
    return `https://img.shields.io/badge/${tech.replace(/_/g, ' ')}-${color}?style=flat-square&logo=${logoName}&logoColor=${logoColor}`;
  };

  return (
   
          <div className={styles.layout}>
                <div className={styles.pageHeading}>
                  <h1 className={styles.pageTitle}>Hi, I&apos;m Arun Kushwaha 👋</h1>
                  <h3 className={styles.pageSubtitle}>
                    Electronics & Communication Engineering | Full-Stack Dev | DevOps | DroneTech
                  </h3>
                  <p style={{ textAlign: 'center' }}>
                    <Image
                      src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&color=F75C7E&center=true&vCenter=true&width=435&lines=Tech+Explorer;MERN+Stack+Dev;Drone+Tech+Enthusiast;DevOps+Learner;Open+Source+Lover+%F0%9F%A4%97"
                      alt="Typing SVG"
                      width={435}
                      height={50}
                      unoptimized
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
                            priority
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
                      {['JavaScript', 'TypeScript', 'C', 'C++', 'Python'].map((tech, idx) => (
                        <Image
                          key={idx}
                          src={generateBadgeUrl(tech, 'F7DF1E', 'black')}
                          alt={tech}
                          width={100}
                          height={30}
                          unoptimized
                        />
                      ))}
                    </p>
          
                    <h4>🌐 Frontend</h4>
                    <p>
                      {['React', 'Tailwind CSS', 'Three.js', 'Bootstrap'].map((tech, idx) => (
                        <Image
                          key={idx}
                          src={generateBadgeUrl(tech, '06B6D4')}
                          alt={tech}
                          width={100}
                          height={30}
                          unoptimized
                        />
                      ))}
                    </p>
          
                    <h4>🧠 Backend & Database</h4>
                    <p>
                      {['Node.js', 'Express', 'MongoDB', 'MySQL'].map((tech, idx) => (
                        <Image
                          key={idx}
                          src={generateBadgeUrl(tech, '339933')}
                          alt={tech}
                          width={100}
                          height={30}
                          unoptimized
                        />
                      ))}
                    </p>
          
                    <h4>🧰 DevOps & Tools</h4>
                    <p>
                      {['Docker', 'Kubernetes', 'Vagrant', 'Linux', 'Git', 'GitHub'].map((tech, idx) => (
                        <Image
                          key={idx}
                          src={generateBadgeUrl(tech, '2496ED')}
                          alt={tech}
                          width={100}
                          height={30}
                          unoptimized
                        />
                      ))}
                    </p>
          
                    <h4>🔬 Others</h4>
                    <p>
                      {['Unity', 'Arduino', 'Blender', 'OpenCV'].map((tech, idx) => (
                        <Image
                          key={idx}
                          src={generateBadgeUrl(tech, '000000')}
                          alt={tech}
                          width={100}
                          height={30}
                          unoptimized
                        />
                      ))}
                    </p>
                  </div>
          
                  <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>📈 GitHub Stats</h3>
                  </div>
          
                  <p style={{ textAlign: 'center' }}>
                    <Image
                      src="https://github-readme-streak-stats.herokuapp.com/?user=Arun-Kushwaha007&theme=tokyonight&hide_border=true&dates=all"
                      width={470}
                      height={180}
                      alt="Streak Stats"
                      unoptimized
                    />
                    <Image
                      src="https://github-readme-stats.vercel.app/api?username=Arun-Kushwaha007&show_icons=true&theme=tokyonight&hide_border=true"
                      width={470}
                      height={180}
                      alt="GitHub Stats"
                      unoptimized
                    />
                  </p>
          
                  <p style={{ textAlign: 'center' }}>
                    <Image
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arun-Kushwaha007&langs_count=100&theme=tokyonight&hide_border=true"
                      width={470}
                      height={180}
                      alt="Top Languages"
                      unoptimized
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



 