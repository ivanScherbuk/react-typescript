import React from 'react';
import styles from '../styles/Pagination.module.css';

interface PaginationProps {
  page: number,
  limit: number,
  maxPage: number,
  setPage: (page: number) => void,
}

const Pagination: React.FC<PaginationProps> = ({ page, limit, maxPage, setPage }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setPage(-page + 1)}>
        <div className={styles.buttonText}>
          {'<<'}
        </div>
      </button>
      <button className={styles.button} onClick={() => setPage(-1)}>
        <div className={styles.buttonText}>
          {'<'}
        </div>
      </button>
      <p>
        {page}
      </p>
      <button className={styles.button} onClick={() => setPage(1)}>
        <div className={styles.buttonText}>
          {'>'}
        </div>
      </button>
      <button className={styles.button} onClick={() => setPage(maxPage - page)}>
        <div className={styles.buttonText}>
          {'>>'}
        </div>
      </button>
    </div>
  );
}

export default Pagination;
