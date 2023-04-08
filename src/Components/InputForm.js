import React, { useState } from 'react';

const InputForm = ({ modalControl, bgControl }) => {
  const [discuss, setDiscuss] = useState({
    title: '',
    author: '',
    story: '',
  });

  const handleValueChange = (e) => {
    setDiscuss({
      ...discuss,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discuss),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(handleBg)
      .then(confirmAndReload);
  };

  const confirmAndReload = () => {
    window.alert('정상적으로 등록되었습니다.');
    window.location.reload();
  };

  const handleBg = () => {
    bgControl(false);
  };

  return (
    <>
      <div
        onClick={handleBg}
        className='black_bg'
        style={{ display: modalControl ? 'block' : 'none' }}
      ></div>
      <section
        className={modalControl ? `form__container` : `form__container hide`}
      >
        <form action='/' method='post' className='form'>
          <div className='form__input--wrapper'>
            <h2 className='tit'>작성하기 🖊</h2>
            <div className='input-box'>
              <div className='form__input--name'>
                <input
                  onChange={(e) => handleValueChange(e)}
                  type='text'
                  name='author'
                  id='author'
                  placeholder='닉네임'
                  required
                />
              </div>
              <div className='form__input--title'>
                <input
                  onChange={(e) => handleValueChange(e)}
                  type='text'
                  name='title'
                  id='title'
                  placeholder='제목'
                  required
                />
              </div>
              <div className='form__textbox'>
                <textarea
                  onChange={(e) => handleValueChange(e)}
                  id='story'
                  name='story'
                  placeholder='질문을 작성해주세요'
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className='form__submit'>
            <input
              onClick={() => submitHandler()}
              type='button'
              value='작성완료'
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default InputForm;
