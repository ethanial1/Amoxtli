import React from 'react';
import AllBooks from '../../components/Books/AllBooks';
import NewRealease from '../../components/Books/NewRealease';
import ReadLast from '../../components/Books/ReadLast';
import PreLoader from '../../components/Loaders/PreLoader';
import Modal from '../../components/Modal/Modal';
import { URL_GET_ALL_BOOKS } from '../../helpers/urls';
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
        <AllBooks openModal={opeModal} url={URL_GET_ALL_BOOKS}/>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} idbook={idbook}/>
      <PreLoader />
    </div>
  )
};

export default Home;
