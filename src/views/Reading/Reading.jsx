import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookNew from '../../components/Books/BookNew'
import Button from '../../components/Buttons/Button';
import { getReadLast } from '../../Redux/actions/actions';
import st from './Reading.module.css';

const Reading = () => {
  const { currentLectures, authid } = useSelector(state => state);
  const dispatch = useDispatch();

  const [currentBook, setCurrentBook] = useState(currentLectures[0]);

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
            <Button titulo="Continual Leyendo" color="black"/>
            <Button titulo="Dejar de Leer" color="black"/>
          </div>
        </div>
      </div>
      <div className={st.carousel_lecturas}>
        {
          currentLectures.map(libro => <BookNew key={libro.idbook} titulo={libro.titulo} img={libro.img} color={libro.color} autor={libro.autor} lastname={libro.lastname} openModal={() => setCurrentBook(libro)}/>)
        }
      </div>
    </div>
  )
};

export default Reading;
