import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Arun Kushwaha is a passionate full-stack developer and tech innovator, building scalable MERN apps, real-time systems, and AI-powered solutions."
      />
      <meta
        name="keywords"
        content="Arun Kushwaha, full stack developer, MERN stack, NIT Hamirpur, drone projects, AI projects, portfolio, product management, program management"
      />
      <meta property="og:title" content="Arun Kushwaha's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer and tech enthusiast from NIT Hamirpur, building innovative solutions with MERN, AI, and real-time systems."
      />
      <meta property="og:image" content="https://your-image-url.com/portfolio-preview.png" />
      <meta property="og:url" content="https://your-portfolio-url.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Arun Kushwaha',
};
