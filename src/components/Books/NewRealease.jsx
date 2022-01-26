import React from 'react';
import { URL_GET_NEW_REALEASE } from '../../helpers/urls';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../Loaders/CircleLoader';
import BookItem from './BookItem';
import st from './Books.module.css';

const NewRealease = ({openModal}) => {

    const [data, error, loading] = useFetch(URL_GET_NEW_REALEASE);

    if(!data) return null;

    if(error) return <div>error</div>;
    
    return (
        loading ? <CircleLoader /> :
        <>
            <h3>New Realice</h3>
            <div className={st.snap_x}>
                <div className={st.snap_flex}>
                { data.map(libro => <BookItem key={libro.idbook} titulo={libro.titulo} autor={libro.autor} lastname={libro.lastname} genero={libro.genero} img={libro.img} openModal={() => openModal(libro.idbook)}/>)}
                </div>
            </div>
        </>
    )
};

export default NewRealease;
