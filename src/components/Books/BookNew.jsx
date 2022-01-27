import React from 'react';
import st from './BookNew.module.css';

const BookNew = ({titulo, autor, lastname, genero, color, img, openModal}) => {
    let estilo = {
        backgroundColor: color
    }
    return (
        <button className={st.container} onClick={openModal}>
            <div className={st.book}>
                <div className={st.front}>
                    <div className={st.cover}>
                        <img src={`http://localhost:4000/ingress/assets/cover/${img}`} alt={titulo} />
                    </div>
                </div>
                <div className={st.left_side} style={estilo}>
                    <h2>
                        <span>{autor} {lastname}</span>
                    </h2>
                </div>
            </div>
            <div className={st.book_item_info}>
                <h5>{titulo}</h5>
                <span>{autor} {lastname}</span>
                <span>{genero}</span>
            </div>
        </button>
    )
};

export default BookNew;
