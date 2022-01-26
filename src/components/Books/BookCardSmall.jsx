import React from 'react';
import st from './Books.module.css';

const BookCardSmall = ({img, titulo, autor}) => {
    return (
        <div className={st.book_small}>
            <img src="https://www.tulectura.es/wp-content/uploads/2016/02/el-principe-destronado.jpg" alt="el principe destronado" />
            <div className={st.book_small_info}>
                <div>
                    <h4>{titulo}</h4>
                    <span>{autor}</span>
                </div>
                <div className={st.stars}>
                    mmm
                </div>
            </div>
        </div>
    )
};

export default BookCardSmall;
