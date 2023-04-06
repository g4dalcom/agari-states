import React, { useState } from 'react';
import Discussion from './Discussion';
import InputForm from './InputForm';

const Main = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  return (
    <>
      <section className='main'>
        <div className='main_container'>
          {/* ============== 메인 이미지 ============== */}
          <figure>
            <div className='img_wrap'>
              <div className='null_object floating_effect'>
                <img
                  className='motion-notebook'
                  src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIxZoO%2Fbtr22JgFzfo%2FXrOOdLauWy8EGRkmNTmRKK%2Fimg.png'
                  alt='img'
                />
              </div>
              <div className='null_object floating_effect1'>
                <img
                  className='motion-error'
                  src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEfWUK%2Fbtr2ZBjDBnF%2FaDzx97lXDChYVEOjVj9rfK%2Fimg.png'
                  alt='img'
                />
              </div>
              <div className='null_object floating_effect2'>
                <img
                  className='motion-cat'
                  src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2BUxQ%2Fbtr21C9VONQ%2Fu0fkKlq3eBFUuVn9MlJ9c1%2Fimg.png'
                  alt='img'
                />
              </div>
              <div className='null_object floating_effect3'>
                <img
                  className='motion-esc'
                  src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJ5DdW%2Fbtr2PSfGzTg%2FgiZxDBQAeR7yE5dr2aQLm0%2Fimg.png'
                  alt='img'
                  s
                />
              </div>
            </div>
          </figure>

          {/* ============== 메인 텍스트 ============== */}
          <div className='text_container'>
            <span>질문만 잘~~ 해도</span>
            <strong>
              <div>실력있는</div>
              <div>개발자가 된다!</div>
            </strong>
            <button className='modal' onClick={handleModal}>
              질문하기
            </button>
          </div>
        </div>
      </section>
      <InputForm modalControl={modal} bgControl={setModal} />
      <Discussion />
    </>
  );
};

export default Main;
