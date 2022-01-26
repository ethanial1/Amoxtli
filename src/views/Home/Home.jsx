import React from 'react';
import AllBooks from '../../components/Books/AllBooks';
import NewRealease from '../../components/Books/NewRealease';
import ReadLast from '../../components/Books/ReadLast';
import PreLoader from '../../components/Loaders/PreLoader';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';

const Home = () => {
  const [idbook, isOpen, opeModal, closeModal] = useModal(false);
  return (
    <div className='wrapper'>
      <div>
        <ReadLast />
      </div>
      <div>
        <NewRealease openModal={opeModal}/>
      </div>
      <div>
        <AllBooks openModal={opeModal}/>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} idbook={idbook}/>
      <PreLoader />
    </div>
  )
};

export default Home;
