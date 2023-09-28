import React from 'react';
import './image.css';
const Image = ({ imageUrl, box }) => {
  return (
    <div
      className='pa shadow-2 mb4 mt3 center ma w-60 '
      style={{ position: 'relative' }}
    >
      <img
        id='boundingBox'
        alt=''
        className='shadow-3 grow br 5'
        src={imageUrl}
        style={{ width: '100%', height: 'auto' }}
      />

      <div
        className='facebounding'
        style={{
          top: `${box.top}%`,
          right: `${box.right}%`,
          bottom: `${box.bottom}%`,
          left: `${box.left}%`,
        }}
      ></div>
    </div>
  );
};
export default Image;
