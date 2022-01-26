import React from 'react';
import { GET_ALL_BOOKS } from '../../helpers/urls';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookItem from './BookItem';
import st from './Books.module.css';

// TODO hacer la petición al servido para cargar todos los libros
const AllBooks = () => {

  const [data, error, loading] = useFetch(GET_ALL_BOOKS);

    if(!data) return null;

    if(error) return <div>error</div>;

  return (
    loading ? <CircleLoader /> :
    <>
      <h3>All our books</h3>
      <div className={st.grid_books}>
        { data.data.map(libro => <BookItem key={libro.idbook} titulo={libro.titulo} autor={libro.autor} lastname={libro.lastname} genero={libro.genero} img={libro.img}/>)}
      </div>
    </>
    
  )
};

export default AllBooks;
