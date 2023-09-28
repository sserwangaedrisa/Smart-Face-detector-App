import React from 'react';

const Rank = ({ name, count }) => {
  return (
    <div className='shadow-2'>
      <div>
        <p className='f3'>{`${name} your current entries are`}</p>
      </div>
      <div>
        <p className='pl2 f1 ma0'>{count}</p>
      </div>
    </div>
  );
};
export default Rank;
