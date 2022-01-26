import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getReadLast } from '../../Redux/actions/actions';
import BookCard from './BookCard';

import st from './Books.module.css';

const ReadLast = () => {
    const currentLectures = useSelector(state => state.currentLectures);
    const authid = useSelector(state => state.authid);
    const dispatch = useDispatch();
    console.log(currentLectures)
    useEffect(() => {
      authid && dispatch(getReadLast(authid));
    }, [authid]);
    
    return (
        currentLectures.length > 0 ?
            <>
            <h3>Books you read last</h3>
            <div className={st.snap_x}>
                <div className={st.snap_flex}>
                    { currentLectures.map(libro => <BookCard key={libro.idbook} titulo={libro.titulo} currentpage={libro.currentpage} img={libro.img} color={libro.color}/>)}
                </div>
            </div>
            </>
        : null
    )
};

// class ReadLast extends React.Component {
//     render() {
//         return (
//             this.props.currentLectures.length > 0 ?
//                 <>
//                 <h3>Books you read last</h3>
//                 <div className={st.snap_x}>
//                     <div className={st.snap_flex}>
//                         { this.props.currentLectures.map(libro => <BookCard key={libro.idbook} titulo={libro.titulo} currentpage={libro.currentpage} img={libro.img} color={libro.color}/>)}
//                     </div>
//                 </div>
//                 </>
//             : null
//         )
//     }
// }


export default ReadLast;
