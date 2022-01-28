import React, { useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Logo1.png';
import st from './Landing.module.css';
import PreLoader from '../../components/Loaders/PreLoader';

const Landing = () => {
  const spot = useRef();
  const { isLoading, error, loginWithRedirect } = useAuth0();

  let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

  useEffect(() => {
    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {
        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
        updateSpotlight(e);
    });

    window.addEventListener('mouseup', e => {
        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
        updateSpotlight(e);
    });
  }, []);

  function updateSpotlight(e) {
    spot.current.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

}
  
  
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
      <div className={st.columnas}>
        <div>
          <img src='http://localhost:4000/ingress/assets/cover/cover6.jpg' alt="" />
          <img src='http://localhost:4000/ingress/assets/cover/cover7.jpg' alt="" />
        </div>
        <div>
          <img src='http://localhost:4000/ingress/assets/cover/cover5.jpg' alt="" />
          <img src='http://localhost:4000/ingress/assets/cover/cover9.jpg' alt="" />
        </div>
        <div className={st.me}>
          Developed by Fernando Tolentino Santiago
          <ul>
            <li><a href="https://www.linkedin.com/in/fernandotolentinosa/"><i className='bx bxl-linkedin-square'></i></a></li>
            <li><a href="https://github.com/ethanial1"><i className='bx bxl-github'></i></a></li>
          </ul>
        </div>
      </div>
      <div className={st.spotlight} ref={spot}></div>
    </div>
  )
};

export default Landing;

/**
 * 
//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }
});
 */