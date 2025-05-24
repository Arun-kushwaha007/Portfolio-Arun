import { useState, useEffect } from 'react';
import ArticleCard from '@/components/ArticleCard'; // Uncommented
import ArticleCardSkeleton from '@/components/ArticleCardSkeleton';
import { Article } from '@/types'; // Uncommented

import styles from '@/styles/ArticlesPage.module.css';

// Sample Article Data
const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 13',
    description: 'A comprehensive guide to setting up your first Next.js 13 project with App Router.',
    cover_image: 'https://via.placeholder.com/300x200/24292e/efefef?text=Next.js+13', // Placeholder
    url: '#',
    page_views_count: 1500,
    public_reactions_count: 95,
    comments_count: 12,
  },
  {
    id: '2',
    title: 'Understanding Server Components in React',
    description: 'Explore the power of React Server Components and how they change data fetching.',
    cover_image: 'https://via.placeholder.com/300x200/282a36/efefef?text=React+Server+Components', // Placeholder
    url: '#',
    page_views_count: 2200,
    public_reactions_count: 120,
    comments_count: 25,
  },
  {
    id: '3',
    title: 'Mastering TypeScript for Large Scale Applications',
    description: 'Best practices for using TypeScript to build robust and maintainable applications.',
    cover_image: 'https://via.placeholder.com/300x200/011627/9fbccc?text=TypeScript+Mastery', // Placeholder
    url: '#',
    page_views_count: 1850,
    public_reactions_count: 78,
    comments_count: 18,
  },
];

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  // const [error, setError] = useState(null); // Keep for actual error handling

  useEffect(() => {
    // Simulate fetching articles
    // console.log("Simulating article fetch..."); // For debugging
    const timer = setTimeout(() => {
      setArticles(sampleArticles); // Load sample data
      setIsLoading(false);
      // console.log("Sample articles loaded."); // For debugging
    }, 1500); // Simulate 1.5 seconds load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        Recent posts where I share insights and tutorials about web development.
        {/* TODO: Replace sampleArticles with actual data fetching logic. */}
      </p>
      <div className={styles.container}>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => ( 
            <ArticleCardSkeleton key={index} />
          ))
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>No articles found. (Or implement a &apos;no articles&apos; state)</p>
        )}
        {/* Basic error display: {error && <p>Error loading articles: {error.message}</p>} */}
      </div>
    </div>
  );
};

// Real getStaticProps or getServerSideProps would replace the useEffect simulation
// export async function getStaticProps() {
//   // Fetch actual articles here
//   return {
//     props: { title: 'Articles', articles: [] /* fetched articles */ },
//   };
// }

export default ArticlesPage;