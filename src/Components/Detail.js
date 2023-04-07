import React from 'react';

const Detail = ({ item }) => {
  return (
    <>
      <div className='detail_wrapper'>
        <div className='detail_container'>
          <div className='detail_info'>
            <div className='detail_id'>글번호 : {item.id}</div>
            <div className='detail_title'>제목 : {item.title}</div>
            <div className='author_info'>
              <img
                src={item.avatarUrl}
                className='detail_avatar'
                alt='avartar'
              ></img>
              <div className='detail_author'>{item.author}</div>
              <div className='detail_createdAt'>
                {item.createdAt.slice(0, 10)}
              </div>
            </div>
          </div>
          <div className='detail_answered'>
            {item.answer ? '답변완료' : '해결중'}
          </div>
          <div className='detail_content'>{item.bodyHTML}</div>
          <div className='detail_btn'>
            <a href='/' className='backBtn'>
              목록으로
            </a>
            <a
              href={item.url}
              className='linkTo'
              target='_blank'
              rel='noreferrer'
            >
              원문보기
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
