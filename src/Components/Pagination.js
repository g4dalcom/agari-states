import React from 'react';

const Pagination = ({ total, limit, page, setPage }) => {
  const naviSize = Math.ceil(total / limit);

  return (
    <>
      {/* < 버튼, 누르면 page - 1 되고 page가 1일 때는 비활성화 */}
      <button
        className='pagination-button'
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>

      {/* 페이지 넘버 생성 */}
      {Array(naviSize)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? 'active' : undefined}
          >
            {i + 1}
          </button>
        ))}

      {/* > 버튼, 누르면 page + 1 되고 page가 1일 때는 비활성화 */}
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
