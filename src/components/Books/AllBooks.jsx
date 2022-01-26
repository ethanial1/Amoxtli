import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookItem from './BookItem';
import st from './Books.module.css';

// TODO hacer la petición al servido para cargar todos los libros
const AllBooks = () => {

  const [data, error, loading] = useFetch();

    if(!data) return null;

    if(error) return <div>error</div>;

  return (
    loading ? <CircleLoader /> :
    <>
      <h3>All our books</h3>
      <div className={st.grid_books}>
        <BookItem titulo={'Ethan'} autor={'Ethan'} lastname={'Toledo'} genero={'Aventura'} img={'https://i.pinimg.com/originals/01/36/eb/0136ebf96184d69dd318befae6fc56f4.jpg'}/>
      </div>
    </>
    
  )
};

export default AllBooks;
