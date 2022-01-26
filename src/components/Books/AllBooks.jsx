import React from 'react';
import BookCardSmall from './BookCardSmall';
import st from './Books.module.css';

// TODO hacer la petición al servido para cargar todos los libros
const AllBooks = () => {
  return (
    <div className={st.grid_books}>
      <BookCardSmall titulo={'Arsitoteles y dante descubren los secretos del universo'}/>
      <BookCardSmall titulo={'Los juegos del habre en llamas'}/>
      <BookCardSmall />
      <BookCardSmall />
      <BookCardSmall />
      <BookCardSmall />
      <BookCardSmall />
      <BookCardSmall />
      <BookCardSmall />
    </div>
  )
};

export default AllBooks;
