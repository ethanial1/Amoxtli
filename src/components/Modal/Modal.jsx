import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';
import { URL_GET_ALL_BOOKS } from '../../helpers/urls';
import { addNewLecture, deleteBookSaved, saveNewBook } from '../../Redux/actions/actions';
import st from './Modal.module.css';

const Modal = ({isOpen, closeModal, idbook}) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { authid } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setData({})
        const getInfo = async () => {
            try {
                setLoading(true);
                let res = await helpHttp().get(`${URL_GET_ALL_BOOKS}${idbook}/${authid}`);
                setData(res)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        idbook && getInfo();

    }, [idbook]);
    
    const handleSave = () => {
        if(!data.saved) {
            dispatch(saveNewBook(data, authid))
            closeModal();
            return
        }
        dispatch(deleteBookSaved(idbook, authid));
        closeModal();
    }

    const handleRead = () => {
        if(!data.leyendo) {
            return dispatch(addNewLecture(data, authid))
        }
        
    }

    return (
        <article className={`${st.modal_main} ${isOpen && st.is_open}`}>
            <div className={st.modal_container}>
                <div className={st.modal_title}>
                    <button onClick={closeModal}><i className='bx bx-chevron-left' ></i></button>
                    <span>About the book</span>
                    <button className={st.save} onClick={handleSave}>
                        { data.saved ? <i className='bx bxs-bookmark' ></i> : <i className='bx bx-bookmark'></i>}
                    </button>
                </div>
                <div className={st.cover}>
                    <div className={`${st.cover_img} ${loading && st.loader}`}>
                        <img src={`https://amoxtliapi.herokuapp.com/ingress/assets/cover/${data.img}`} alt={data.titulo}/>
                    </div>
                    <div className={`${st.cover_info} ${loading && st.loader_text}`}>
                        <h2>{data.titulo}</h2>
                        <span>{data.autor}</span>
                        <div className={st.cover_data}>
                            <span>{data.numpags}pag  &nbsp;&nbsp; - &nbsp;&nbsp; 2019  &nbsp;&nbsp; - &nbsp;&nbsp; {data.idioma}</span>
                            <span>{data.genero}</span>
                        </div>
                        <div className={st.star}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half' ></i>
                        </div>
                    </div>
                </div>
                <div className={st.book_info}>
                    <h4>Introduction</h4>
                    { 
                        loading ? 
                        (   <div className={st.loader_info}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div> 
                        ) :<p>{data.resumen}</p>
                    }
                </div>
                <div className={st.actions}>
                    {
                        data.file ?
                        <NavLink onClick={handleRead} to={`/amoxtli/reading?id=${idbook}`} style={{backgroundColor: data.color}}>
                            {
                                data.leyendo ? "Continuar Leyendo" : "Leer"
                            }
                        </NavLink>
                        : <div>Libro de Ejemplo</div>
                    }
                </div>
            </div> 
        </article>
    )
};

export default Modal;
