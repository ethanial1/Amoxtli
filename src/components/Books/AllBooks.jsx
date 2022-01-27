import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookItem from './BookItem';
import BookNew from './BookNew';
import st from './Books.module.css';

const AllBooks = ({openModal, url}) => {
  const [data, error, loading] = useFetch(url);

  if(!data) return null;

  if(error) return <div>error</div>;

  return (
    loading ? <CircleLoader /> :
    <>
      <h3>All our books</h3>
      <div className={st.grid_books}>
        { data.data.map(libro => <BookNew key={libro.idbook} titulo={libro.titulo} autor={libro.autor} lastname={libro.lastname} genero={libro.genero} color={libro.color} img={libro.img} openModal={() => openModal(libro.idbook)}/>)}
      </div>
    </>
    
  )
};

export default AllBooks;
