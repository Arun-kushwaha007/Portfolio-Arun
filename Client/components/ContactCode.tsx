import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'arunsk1310@gmail.com',
    href: 'mailto:arunsk1310@gmail.com',
  },
  {
    social: 'github',
    link: 'Arun-kushwaha007',
    href: 'https://github.com/Arun-kushwaha007',
  },
  {
    social: 'linkedin',
    link: 'arun-kushwaha',
    href: 'https://www.linkedin.com/in/arun-kushwaha-394b5a340/',
  },
  {
    social: 'resume',
    link: 'View Resume',
    href:"https://drive.google.com/file/d/1NqV72glFAtCTJGs5RFGCeBfqX4Cj4x5V/view?usp=sharing", // <-- Replace with your file ID or URL
  },
  // Optional — add your portfolio website if hosted
  // {
  //   social: 'website',
  //   link: 'arunkushwaha.dev',
  //   href: 'https://arunkushwaha.dev',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
