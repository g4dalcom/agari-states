import React, { useEffect, useState } from 'react';
import Pagination from './Pagination.js';

const Discussion = () => {
  const [discussion, setDiscussion] = useState([]);
  const [detailStatus, setDetailStatus] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const PAGE_SIZE = 9;
  const pageSize = PAGE_SIZE;
  const startIndex = pageSize * (pageNumber - 1);
  const endIndex = startIndex + (pageSize - 1);

  console.log('pageNumber = ', pageNumber);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setDiscussion(data));
  }, [pageNumber]);

  useEffect(() => {
    // setDetailModal(true);
    fetch(`http://localhost:3000/discussion/${detailStatus}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [detailStatus]);

  return (
    <>
      <section className='discussion__wrapper'>
        <ul className='discussions__container'>
          {discussion.slice(startIndex, endIndex + 1).map((el) => {
            return (
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
                  <h5 className='discussion__title'>{el.title}</h5>
                  {/* <a href={el.url} rel='noreferrer' target='_blank'>
                    {el.title}
                  </a> */}
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
            );
          })}
        </ul>
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
