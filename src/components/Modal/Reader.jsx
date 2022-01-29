import React, { useState } from 'react';
import { ReactReader } from 'react-reader';

import st from './Reader.module.css';

const Reader = ({idbook, isOpen, closeModal}) => {
    const [location, setLocation] = useState(null)
    const locationChanged = (epubcifi) => {
        setLocation(epubcifi)
    }

    if(!idbook) return null;
    
    return (
        <div className={`${st.reader} ${ isOpen && st.is_open }`}>
            <button onClick={closeModal} className={st.btn}><i className='bx bx-x'></i></button>
            <div id={st.viewer_book_show}>
                <ReactReader 
                    location={location}
                    locationChanged={locationChanged}
                    url={"http://localhost:4000/ingress/books/epub/2.epub"}
                />
            </div>
        </div>
    )
};

export default Reader;
