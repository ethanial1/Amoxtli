import React from 'react';
import styles from './Books.module.css';

const BookCard = ({titulo, img, color, fecha}) => {
    return (
        <div className={styles.snap_center}>
            <button className={styles.book_card_item}>
                <div className={styles.book_details} style={{background: color}}>
                    <div className={styles.book_info}>
                        <div>
                            <h5>{titulo}</h5>
                            <span>{fecha}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.book_img}>
                    <img src={`http://localhost:4000/ingress/assets/cover/${img}`} alt={titulo} />
                </div>
            </button>
        </div>
    )
};

export default BookCard;
