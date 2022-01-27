import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { URL_GENEROS } from '../../helpers/urls';
import { useFetch } from '../../hooks/useFetch';
import { setBookGen } from '../../Redux/actions/actions';
import CircleLoader from '../Loaders/CircleLoader';
import BookGenero from './BookGenero';

import st from './Books.module.css';

const BookListGen = () => {
    const [data, error, loading ] = useFetch(URL_GENEROS);
    const [current, setCurrent] = useState(0);

    const dispatch = useDispatch();

    if(!data) return null;

    return (
        loading ? <CircleLoader /> :
        <div className={st.snap_x}>
            <div className={st.snap_flex}>
                <BookGenero key={0} name="All" background={0} index={0} current={current} setCurrent={setCurrent} updateGen={() => dispatch(setBookGen(0))}
                />
                {
                    data.map((elemt, index) => 
                        <BookGenero 
                            key={index} 
                            name={elemt.name} 
                            background={elemt.background} 
                            index={index + 1}
                            current={current} 
                            setCurrent={setCurrent}
                            updateGen={() => dispatch(setBookGen(elemt.idgen))}
                        />
                    )
                }
            </div>
        </div>
    )
};

export default memo(BookListGen);
