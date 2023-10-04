import React from 'react';
import './Navbar.css';
const Navbar = ({ page, pageStateChanger }) => {
  if (page === 'home') {
    return (
      <div
        className='Nav-item'
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <p
          onClick={() => {
            pageStateChanger('signIn');
          }}
          className='sign sign-out pa3 li pointer dim f3 underline grow'
        >
          SignOut
        </p>
      </div>
    );
  } else {
    return (
      <div
        className='Nav-item'
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <p
          onClick={() => {
            pageStateChanger('signIn');
          }}
          className='sign sign-in pa3 li pointer dim f3 underline grow'
        >
          SignIn
        </p>
        <p
          onClick={() => {
            pageStateChanger('signUp');
          }}
          className='sign sign-up pa3 li pointer dim f3 underline grow'
        >
          SignUp
        </p>
      </div>
    );
  }
};

export default Navbar;
