import React from 'react';
import style from './Books.module.css';

const BookItem = ({titulo, autor, lastname, genero, img, openModal}) => {
  return (
    <div className={style.book}>
        <button className={style.book_item} onClick={openModal}>
            <img src={img} alt={titulo} />
            <div className={style.book_item_info}>
                <h5>{titulo}</h5>
                <span>{autor} {lastname}</span>
                <span>{genero}</span>
            </div>
        </button>
    </div>
  )
};

export default BookItem;
