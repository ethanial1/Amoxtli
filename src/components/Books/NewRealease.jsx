import React from 'react';
import BookItem from './BookItem';
import st from './Books.module.css';

const NewRealease = () => {
    return (
        <div className={st.snap_x}>
            <div className={st.snap_flex}>
                <BookItem titulo={"hola"} autor={"como"} lastname={"mucha"} genero={"comida"} img={"https://www.tulectura.es/wp-content/uploads/2016/02/el-principe-destronado.jpg"}/>
            </div>
        </div>
    )
};

export default NewRealease;
