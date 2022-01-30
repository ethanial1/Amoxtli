import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getReadLast } from '../../Redux/actions/actions';
import BookCard from './BookCard';

import st from './Books.module.css';

const ReadLast = () => {
    const { currentLectures, authid } = useSelector(state => state);
    const dispatch = useDispatch();
 
    useEffect(() => {
      authid && dispatch(getReadLast(authid));
    }, [authid]);
    
    return (
        currentLectures.length > 0 ?
            <>
            <h3>Books you read last</h3>
            <div className={st.snap_x}>
                <div className={st.snap_flex}>
                    { currentLectures.map(libro => <BookCard key={libro.idbook} titulo={libro.titulo} currentpage={libro.currentpage} img={libro.img} color={libro.color} idbook={libro.idbook}/>)}
                </div>
            </div>
            </>
        : null
    )
};


export default ReadLast;
