import React from 'react';
import { useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookNew from './BookNew';

import st from './Books.module.css';

const BookSaved = () => {
    const { authid } = useSelector(state => state);
    const [data, error, loading] = useFetch(`https://amoxtliapi.herokuapp.com/ingress/books/saved/${authid}`);

    if(!data) return null;

    return(
        loading ? <CircleLoader /> :
        <div className={st.wrapper}>
            <div className={st.grid_books}>
                {
                    data.map(libro => <BookNew key={libro.idbook} titulo={libro.titulo} autor={libro.autor} lastname={libro.lastname} genero={libro.genero} color={libro.color} img={libro.img} />)
                }
            </div>
        </div>
    )
};

export default BookSaved;
