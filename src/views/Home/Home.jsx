import React from 'react';
import AllBooks from '../../components/Books/AllBooks';
import NewRealease from '../../components/Books/NewRealease';
import ReadLast from '../../components/Books/ReadLast';
import PreLoader from '../../components/Loaders/PreLoader';

const Home = () => {
  return (
    <div className='wrapper'>
      <div>
        <h3>Books you read last</h3>
        <ReadLast />
      </div>
      <div>
        <NewRealease />
      </div>
      <div>
        <AllBooks />
      </div>
      <PreLoader />
    </div>
  )
};

export default Home;
