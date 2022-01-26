import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookItem from './BookItem';
import st from './Books.module.css';

const NewRealease = () => {

    const [data, error, loading] = useFetch();

    if(!data) return null;

    if(error) return <div>error</div>;

    return (
        loading ? <CircleLoader /> :
        <>
            <h3>New Realice</h3>
            <div className={st.snap_x}>
                <div className={st.snap_flex}>
                    <BookItem titulo={"hola"} autor={"como"} lastname={"mucha"} genero={"comida"} img={"https://www.tulectura.es/wp-content/uploads/2016/02/el-principe-destronado.jpg"}/>
                </div>
            </div>
        </>
    )
};

export default NewRealease;
