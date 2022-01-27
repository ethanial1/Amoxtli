import React from 'react';
import { useSelector } from 'react-redux';
import AllBooks from '../../components/Books/AllBooks';
import BookListGen from '../../components/Books/BookListGen';
import HeroBook from '../../components/Books/HeroBook';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';

const Search = () => {
  const [idbook, isOpen, opeModal, closeModal] = useModal(false);

  const idGen = useSelector(state => state.idGen);
  let url = `http://localhost:4000/ingress/books/gen/0/${idGen}`;

  return (
    <div className='wrapper'>
      <div>
        <HeroBook />
      </div>
      <div>
        <BookListGen />
      </div>
      <div>
        <AllBooks url={url} openModal={opeModal}/>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} idbook={idbook}/>
    </div>
  )
};

export default Search;
