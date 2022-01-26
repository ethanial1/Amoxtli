import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Logo1.png';
import st from './Landing.module.css';

const Landing = () => {

  const {
    isLoading,
    error,
    loginWithRedirect
  } = useAuth0();
  
  return (
    <div className={st.container}>
      <div>
        <img src={logo} alt="amoxtli"/>
      </div>
      <div className={st.info}>
        <div>
          <h1>Amoxtli</h1>
            <span>un lugar de mundos e ideas</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto praesentium modi veritatis autem accusamus aspernatur veniam. Atque, deserunt. Est omnis similique ipsa quo doloribus non soluta eos natus quidem.</p>
            <div className={st.btns}>
              <button onClick={loginWithRedirect}>Iniciar sesión</button>
            </div>
        </div>
        <div className={st.carousel}>
          <div className={st.card}>
              <h2>Un lugar donde todos pueden compartir sus mundos</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste cum hic.</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Landing;
