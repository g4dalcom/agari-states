import React from 'react';

const Pagination = ({ total, limit, page, setPage }) => {
  const naviSize = Math.ceil(total / limit);
  console.log('total = ', total);

  return (
    <>
      <button
        className='pagination-button'
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(naviSize)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            // aria-current={page === i + 1 ? 'page' : null}
            className={page === i + 1 && 'active'}
          >
            {i + 1}
          </button>
        ))}
      <button
        className='pagination-button'
        onClick={() => setPage(page + 1)}
        disabled={page === naviSize}
      >
        &gt;
      </button>
    </>
  );
};

export default Pagination;
