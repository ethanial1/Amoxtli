import React from 'react';
import { URL_GET_ALL_BOOKS } from '../../helpers/urls';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookItem from './BookItem';
import st from './Books.module.css';

const AllBooks = ({openModal}) => {

  const [data, error, loading] = useFetch(URL_GET_ALL_BOOKS);

    if(!data) return null;

    if(error) return <div>error</div>;

  return (
    loading ? <CircleLoader /> :
    <>
      <h3>All our books</h3>
      <div className={st.grid_books}>
        { data.data.map(libro => <BookItem key={libro.idbook} titulo={libro.titulo} autor={libro.autor} lastname={libro.lastname} genero={libro.genero} img={libro.img} openModal={() => openModal(libro.idbook)}/>)}
      </div>
    </>
    
  )
};

export default AllBooks;
