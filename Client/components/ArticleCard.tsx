import Image from 'next/image';
import { VscEye, VscHeart, VscComment } from 'react-icons/vsc';

import { Article } from '@/types';

import styles from '@/styles/ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={article.cover_image}
          alt={article.title}
          fill // Use fill for responsive images, parent should have position:relative and dimensions
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes
          className={styles.image}
        />
        {typeof article.page_views_count === 'number' && ( // Conditionally render if count is a number
          <div className={styles.viewsBadge}>
            <VscEye /> {article.page_views_count.toLocaleString()}
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{article.description}</p>

        <div className={styles.footer}>
          <div className={styles.stats}>
            {typeof article.public_reactions_count === 'number' && (
              <div className={styles.stat}>
                <VscHeart className={styles.icon} />{' '}
                {article.public_reactions_count.toLocaleString()}
              </div>
            )}
            {typeof article.comments_count === 'number' && (
              <div className={styles.stat}>
                <VscComment className={styles.icon} /> {article.comments_count.toLocaleString()}
              </div>
            )}
          </div>
          {/* Optional: Add a 'Read More' button or similar if needed */}
          {/* <div className={styles.readMore}>Read More</div> */}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;