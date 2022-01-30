import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Books.module.css';

const BookCard = ({titulo, img, color, fecha, idbook}) => {
    return (
        <div className={styles.snap_center}>
            <NavLink to={`/amoxtli/reading?id=${idbook}`} className={styles.book_card_item}>
                <div className={styles.book_details} style={{background: color}}>
                    <div className={styles.book_info}>
                        <div>
                            <h5>{titulo}</h5>
                            <span>{fecha}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.book_img}>
                    <img src={`https://amoxtliapi.herokuapp.com/ingress/assets/cover/${img}`} alt={titulo} />
                </div>
            </NavLink>
        </div>
    )
};

export default BookCard;
