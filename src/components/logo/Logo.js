import React from 'react';
import { Tilt } from 'react-tilt';
import Brain from './brain.png';
import './logo.css';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};
const Logo = () => {
  return (
    <div className='logo ma2 mt1 br2 shadow-2'>
      <Tilt
        options={defaultOptions}
        className='tilt'
        style={{ height: 100, width: 100 }}
      >
        <div className='image'>
          <img src={Brain} width={90} className=' pa1 ' alt='imag' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
