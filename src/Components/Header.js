import React from 'react';

const Header = () => {
  const logoImg =
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdOTLKF%2Fbtr2OqwN8fe%2F75rJmFEs9jrg9n2Wx4X1X0%2Fimg.png';

  return (
    <>
      <section className='header'>
        <div className='navigation'>
          <h1>
            <a href='http://localhost:3000/'>
              <img src={logoImg} alt='logo' />
              AGARI STATES
            </a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href='https://g4daclom.tistory.com/' alt='blog'>
                  블로그
                </a>
              </li>
              <li>
                <a href='https://github.com/g4dalcom' alt='github'>
                  깃허브
                </a>
              </li>
              <li>
                <a href='https://solved.ac/profile/g4dalcom' alt='solved.ac'>
                  Solved.ac
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
