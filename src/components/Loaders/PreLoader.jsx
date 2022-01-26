import React, { useState, useEffect } from 'react';
import st from './Loaders.module.css';

const PreLoader = () => {
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false);
        }, 1000);
    }, []);
    
    return preloader ? <div className={st.preloader}></div> : null;
};

export default PreLoader;
