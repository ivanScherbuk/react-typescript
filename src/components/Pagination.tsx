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
      <button onClick={() => setPage(-page + 1)}>
        {'<<'}
      </button>
      <button onClick={() => setPage(-1)}>
        {'<'}
      </button>
      <p>
        {page}
      </p>
      <button onClick={() => setPage(1)}>
        {'>'}
      </button>
      <button onClick={() => setPage(maxPage - page)}>
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
