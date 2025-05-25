import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'const HomePage = () => {', type: 'function' },
    { code: '  const [isLoaded, setIsLoaded] = useState(true);', type: 'variable' },
    { code: '  const developerInfo = {', type: 'variable' },
    { code: "    name: 'Arun Kushwaha',", type: 'array-item' },
    { code: "    branch: 'ECE @ NIT Hamirpur',", type: 'array-item' },
    { code: "    role: 'MERN Dev | AI/Drone Builder | Unity Creator',", type: 'array-item' },
    {
      code: "    bio: 'Bridging code and circuits—MERN, DevOps, Unity, and drone systems using GPR & AI.'",
      type: 'array-item',
    },
    { code: '  };', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '  useEffect(() => {', type: 'nested-function' },
    {
      code: '    document.title = `${developerInfo.name} | Portfolio`;',
      type: 'return',
    },
    { code: '    setIsLoaded(true);', type: 'function-call' },
    { code: '  }, []);', type: 'close' },
    { code: '', type: 'blank' },
    { code: '  return (', type: 'return-object' },
    { code: '    <main className="hero-container">', type: 'object-method' },
    { code: '      <h1>{developerInfo.name}</h1>', type: 'object-method' },
    { code: '      <p>{developerInfo.role}</p>', type: 'object-method' },
    { code: '      <div className="cta">', type: 'object-method' },
    {
      code: '        <Link href="/projects">Explore My Work</Link>',
      type: 'object-method',
      
    },
    { code: '      </div>', type: 'object-method' },
    { code: '    </main>', type: 'object-method' },
    { code: '  );', type: 'close' },
    { code: '};', type: 'close-function' },
    { code: '', type: 'blank' },
    { code: 'export default HomePage;', type: 'function-call' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>
              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Arun <span className={styles.accentText}>Kushwaha</span>
          </h1>

          <div className={styles.developerRole}>
            ECE • MERN Stack • DevOps • AI/ML • Unity • Drone Tech
          </div>

          <p className={styles.bio}>
            I&apos;m an ECE undergrad from NIT Hamirpur with a passion for building intelligent systems and real-world solutions.
            From MERN-based full-stack apps and real-time chat platforms to drone-based landslide detection using GPR, I fuse
            code with hardware. I’ve organized 4+ national hackathons, mentored 80+ juniors, and deployed 10+ production-ready
            projects. Also exploring AR/VR in Unity and writing NLP pipelines with Python.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              Explore My Work <VscArrowRight />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1NqV72glFAtCTJGs5RFGCeBfqX4Cj4x5V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              View Resume <VscArrowRight />
            </Link>
            
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
