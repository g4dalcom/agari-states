import React, { useEffect, useState } from 'react';

const Discussion = () => {
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setDiscussion(data));
  }, []);

  return (
    <>
      <section className='discussion__wrapper'>
        <ul className='discussions__container'>
          {discussion.map((el) => {
            return (
              <li className='discussion__container'>
                <div className='discussion__avatar--wrapper'>
                  <img
                    className='discussion__avatar--image'
                    src={el.avatarUrl}
                    alt={`avatar of ${el.author}`}
                  />
                </div>
                <div className='discussion__content'>
                  <h2 className='discussion__title'></h2>
                  <a href={el.url} rel='noreferrer' target='_blank'>
                    {el.title}
                  </a>
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
        <div className='pagination_container'></div>
      </section>
    </>
  );
};

export default Discussion;
