import React, { memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Logo1.png';
import st from './Landing.module.css';
import PreLoader from '../../components/Loaders/PreLoader';
import Button from '../../components/Buttons/Button';

const Landing = () => {
  const { isLoading, error, loginWithRedirect } = useAuth0();
  return (
    isLoading ? <PreLoader /> :
    <div className={st.container}>
      <div className={st.nav}>
        <img src={logo} alt="amoxtli"/>
      </div>
      <div className={st.info}>
        <div>
          <h1>Amoxtli</h1>
            <span>un lugar de mundos e ideas</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto praesentium modi veritatis autem accusamus aspernatur veniam. Atque, deserunt. Est omnis similique ipsa quo doloribus non soluta eos natus quidem.</p>
            <Button titulo="Iniciar Sesión" cb={loginWithRedirect}/>
        </div>
        <div className={st.carousel}>
          <div className={st.card}>
              <h2>Un lugar donde todos pueden compartir sus mundos</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste cum hic.</span>
          </div>
        </div>
      </div>
      <div className={st.columnas}>
        <div>
          <img src='https://amoxtliapi.herokuapp.com/ingress/assets/cover/cover6.jpg' alt="" />
          <img src='https://amoxtliapi.herokuapp.com/ingress/assets/cover/cover7.jpg' alt="" />
        </div>
        <div>
          <img src='https://amoxtliapi.herokuapp.com/ingress/assets/cover/cover5.jpg' alt="" />
          <img src='https://amoxtliapi.herokuapp.com/ingress/assets/cover/cover9.jpg' alt="" />
        </div>
        <div className={st.me}>
          Developed by Fernando Tolentino Santiago
          <ul>
            <li><a href="https://www.linkedin.com/in/fernandotolentinosa/"><i className='bx bxl-linkedin-square'></i></a></li>
            <li><a href="https://github.com/ethanial1"><i className='bx bxl-github'></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default memo(Landing);