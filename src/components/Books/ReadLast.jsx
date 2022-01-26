import React from 'react';
import BookCard from './BookCard';

import st from './Books.module.css';

const ReadLast = () => {
    return (
        <div className={st.snap_x}>
            <div className={st.snap_flex}>
                <BookCard color={'red'} titulo={'todos los dias son nuestros'} img='https://1.bp.blogspot.com/-hraJpjY6c6w/WJ7PckR0q6I/AAAAAAAAJtY/t5yze0PF5P0zwDPyThq0uYV6sMLurNkzwCLcB/s1600/1.jpg'/>
            </div>
        </div>
    )
};

export default ReadLast;
