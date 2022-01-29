import React, { memo } from 'react';
import st from './Books.module.css';

const HeroBook = ({img, titulo, descrip}) => {
    return (
        <div className={st.hero_book}>
            <div className={st.hero_book_img}>
                <div className={st.hero_book_info}>
                    <div>
                        <img src="https://imagessl4.casadellibro.com/a/l/t0/74/9788490437674.jpg" alt='heredero'/>
                    </div>
                    <div>
                        <h2>La segunda revolución Heredero</h2>
                        <p>
                            Casi veinte años después, los estudiantes del Liceo de la Guardia de Blyd se entrenan para proteger con su magia a una sociedad que hace años que vive en paz. Pero cuando la sombra de Dominio vuelve a acechar al país, un grupo de estudiantes tendrá que enfrentarse a los secretos del pasado... sin revelar los suyos.
                        </p>
                    </div>
                </div>
            </div>
            <div className={st.blur} style={{background: "url('https://imagessl4.casadellibro.com/a/l/t0/74/9788490437674.jpg') no-repeat center fixed"}}></div>
        </div>
    )
};

export default memo(HeroBook);

