import ContactCode from '@/components/ContactCode';
import ContactForm from '@/components/ContactForm'; // Import the new form
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Let&apos;s connect! Whether you&apos;re hiring for a Summer 2025 internship, collaborating on a deep-tech project, or looking to grow a tech community — I&apos;m always open to conversations, opportunities, and impact.
      </p>
      <div className={styles.contentWrapper}> {/* New wrapper for layout */}
        <div className={styles.contactInfoSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <ContactCode />
        </div>
        <div className={styles.contactFormSection}>
          {/* The form title is now part of the ContactForm component */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
