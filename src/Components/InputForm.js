import React from 'react';

const InputForm = ({ modalControl, bgControl }) => {
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
        className={
          modalControl === false ? `form__container hide` : `form__container`
        }
      >
        <form action='' method='get' class='form'>
          <div className='form__input--wrapper'>
            <h2 className='tit'>작성하기 🖊</h2>
            <div className='input-box'>
              <div className='form__input--name'>
                <input
                  type='text'
                  name='author'
                  id='author'
                  placeholder='닉네임'
                  required
                />
              </div>
              <div className='form__input--title'>
                <input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='제목'
                  required
                />
              </div>
              <div className='form__textbox'>
                <textarea
                  id='story'
                  name='story'
                  placeholder='질문을 작성해주세요'
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className='form__submit'>
            <input type='submit' value='작성완료' />
          </div>
        </form>
      </section>
    </>
  );
};

export default InputForm;
