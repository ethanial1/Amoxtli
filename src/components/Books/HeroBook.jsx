import React, { memo } from 'react';
import st from './Books.module.css';

const HeroBook = ({img, titulo, descrip}) => {
    return (
        <div className={st.hero_book}>
            <div className={st.hero_book_img}>
                <div className={st.hero_book_info}>
                    <div>
                        <img src="https://imagessl4.casadellibro.com/a/l/t0/74/9788490437674.jpg" />
                    </div>
                    <div>
                        <h2>La segunda revolución Heredero</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis modi sed, nostrum explicabo repudiandae itaque deleniti consectetur dolor tempore enim suscipit eligendi perferendis laborum ut praesentium reiciendis, omnis vel laudantium.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, corporis quis provident totam porro necessitatibus ad neque, ipsa, amet voluptas eum. Amet reiciendis nesciunt beatae corrupti deleniti voluptas facere suscipit!</p>
                    </div>
                </div>
            </div>
            <div className={st.blur} style={{background: "url('https://imagessl4.casadellibro.com/a/l/t0/74/9788490437674.jpg') no-repeat center fixed"}}></div>
        </div>
    )
};

export default memo(HeroBook);

