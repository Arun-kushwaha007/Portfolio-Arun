import { useState, useEffect } from 'react';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1); // Start with full opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const opacity = 1 - (scrollPosition / maxScroll);
      setScrollOpacity(Math.max(opacity, 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Arun Kushwaha</h1>
        <div className={styles.subtitle}>
          ECE Engineer | MERN Dev | Drone Technologist | Hackathon Leader
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m an Electronics and Communication Engineering student at NIT Hamirpur passionate about building tech that creates real-world impact. From hardware to full-stack, I thrive where innovation meets execution.
            </p>
            <p className={styles.paragraph}>
              My core stack includes MERN (MongoDB, Express, React, Node.js), DevOps tools (Docker, GitHub Actions, CI/CD), and embedded/hardware systems (Arduino, Raspberry Pi, GPR, Lidar). I also explore Unity for AR/VR development and rapid simulations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I Do</h2>
            <p className={styles.paragraph}>
              I&apos;m currently developing a drone-based landslide detection system using Ground Penetrating Radar (GPR), Lidar, and thermal imaging. With YOLOv5-based AI pipelines and real-time data fusion, we&apos;re aiming to save lives in the Himalayan disaster zones.
            </p>
            <p className={styles.paragraph}>
              I also prototyped an AI-powered FIR Analyzer that achieved over 85% precision in classifying police reports by IPC sections — finalist at Rajasthan Police Hackathon 2024.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>DevOps &amp; Full Stack</h2>
            <p className={styles.paragraph}>
              On the software side, I develop scalable web apps, real-time systems, and CI/CD-enabled pipelines. I&apos;ve built everything from a Stack Overflow clone with live chat to full-stack platforms with secure authentication (OAuth 2.0, JWT) and cloud deployment.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hackathons &amp; Leadership</h2>
            <p className={styles.paragraph}>
              As President of SPEC (2024–25), I lead 80+ members and have organized Electrothon 6.0 &amp; 7.0 with 750+ participants. I&apos;ve also served as Internal Affairs Head at Hack 5.0, handling volunteer coordination and logistics for 36-hour national hackathons.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Mentorship &amp; Community</h2>
            <p className={styles.paragraph}>
              I&apos;ve mentored 20+ juniors across full-stack, AI, and Unity development. From organizing 10+ hands-on workshops to collaborating with PR and design teams, I bring people together to build and learn.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              I enjoy combining creativity with engineering — whether it&apos;s tuning sensors, creating motion-based Unity games, or editing videos in Premiere Pro. Also a competitive coder (Codeforces rating: 844) and public speaker who loves to share ideas and energy.
            </p>
          </section>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className={styles.scrollDownIndicator} 
        style={{ opacity: scrollOpacity }}
      >
        <div className={styles.scrollText}>.</div>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
