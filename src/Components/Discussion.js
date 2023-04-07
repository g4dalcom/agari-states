import React from 'react';
import Pagination from './Pagination.js';
import { Link } from 'react-router-dom';

const Discussion = ({
  pageNumber,
  discussion,
  setDetailStatus,
  setPageNumber,
}) => {
  /* 페이지네이션을 위한 변수 */
  const PAGE_SIZE = 6;
  const pageSize = PAGE_SIZE;
  const startIndex = pageSize * (pageNumber - 1);
  const endIndex = startIndex + pageSize;

  return (
    <>
      <section className='discussion__wrapper'>
        <ul className='discussions__container'>
          {/* 전체 목록 중 pageNumber에 따라 9개씩 불러오기 */}
          {discussion.slice(startIndex, endIndex).map((el) => {
            return (
              <Link to={`/${el.id}`}>
                <li
                  key={el.id}
                  onClick={() => setDetailStatus(el.id)}
                  className='discussion__container'
                >
                  <div className='discussion__avatar--wrapper'>
                    <img
                      className='discussion__avatar--image'
                      src={el.avatarUrl}
                      alt={`avatar of ${el.author}`}
                    />
                  </div>
                  <div className='discussion__content'>
                    <h5>{el.title}</h5>
                    <div className='discussion__information'>
                      {el.author} / {el.createdAt.slice(0, 10)}
                    </div>
                  </div>
                  <div className='discussion__answered'>
                    <p className={el.answer && 'complete'}>
                      {el.answer ? '답변완료' : '해결중'}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        {/* 페이지네이션 컨테이너 */}
        <div className='pagination_container'>
          <Pagination
            total={discussion.length}
            limit={PAGE_SIZE}
            page={pageNumber}
            setPage={setPageNumber}
          />
        </div>
      </section>
    </>
  );
};

export default Discussion;
