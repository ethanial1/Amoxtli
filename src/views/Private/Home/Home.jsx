import React from 'react';
import AllBooks from '../../../components/Books/AllBooks';
import NewRealize from '../../../components/Books/NewRealize';
import ReadLast from '../../../components/Books/ReadLast';

const Home = () => {
  return (
    <div className='wrapper'>
      <div>
        <h3>Books you read last</h3>
        <ReadLast />
      </div>
      <div>
        <h3>New Realice</h3>
        <NewRealize />
      </div>
      <div>
        <h3>All our books</h3>
        <AllBooks />
      </div>
    </div>
  )
};

export default Home;
