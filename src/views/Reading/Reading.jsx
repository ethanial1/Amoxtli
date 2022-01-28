import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookNew from '../../components/Books/BookNew'
import Button from '../../components/Buttons/Button';
import Reader from '../../components/Modal/Reader';
import { useModal } from '../../hooks/useModal';
import { getReadLast } from '../../Redux/actions/actions';
import st from './Reading.module.css';

const Reading = () => {
  const { currentLectures, authid } = useSelector(state => state);
  const [currentBook, setCurrentBook] = useState(currentLectures[0]);
  const [idbook, isOpen, opeModal, closeModal] = useModal(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authid && dispatch(getReadLast(authid));
  }, [authid]);

  return (
    <div className='wrapper'>
      <div className={st.read}>
        <div className={st.item}>
          <img src={`http://localhost:4000/ingress/assets/cover/${currentBook.img}`} alt={currentBook.titulo} />
        </div>
        <div className={st.info}>
          <h2>{currentBook.titulo}</h2>
          <p>{currentBook.resumen}</p>
          <span className={st.autor}>{currentBook.autor} {currentBook.lastname}</span>
          <div>
            <Button titulo="Continual Leyendo" color="black" cb={opeModal}/>
            <Button titulo="Dejar de Leer" color="black"/>
          </div>
        </div>
      </div>
      <div className={st.carousel_lecturas}>
        {
          currentLectures.map(libro => <BookNew key={libro.idbook} titulo={libro.titulo} img={libro.img} color={libro.color} autor={libro.autor} lastname={libro.lastname} openModal={() => setCurrentBook(libro)}/>)
        }
      </div>
      <Reader isOpen={isOpen} closeModal={closeModal} idbook={idbook}/>
    </div>
  )
};

export default Reading;
