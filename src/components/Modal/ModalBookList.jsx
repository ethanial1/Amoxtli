import React from 'react';
import st from './Modal.module.css';

const ModalBookList = () => {
  return (
    <div className={st.books_related}>
        <div className={st.book_list_item}>
            <img src="https://www.showbizjunkies.com/wp-content/uploads/2021/06/only-murders-in-the-building-poster.jpg" alt="" />
                <div>
                    <h5>Only murders in the building</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis aliquid maiores?</p>
                </div>
        </div>
    </div>
  )
};

export default ModalBookList;
