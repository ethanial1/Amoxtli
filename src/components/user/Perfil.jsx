import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import st from './User.module.css';

const Perfil = () => {
    const { user } = useAuth0();

    return (
        <div className={st.perfil}>
            <div className={st.foto}>
                <img src={user.picture} alt={user.name} />
            </div>
            <div className={st.form}>
                <div>
                    <div className={st.form_group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name'readOnly defaultValue={user.name}/>
                    </div>
                    <div className={st.form_group}>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id='lastname' name='lastname'readOnly defaultValue={user.family_name}/>
                    </div>
                </div>
                <div>
                    <div className={st.form_group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email'readOnly defaultValue={user.email}/>
                    </div>
                    <div className={st.form_group}>
                        <label htmlFor="usertype">User Type</label>
                        <input type="text" id='usertype' name='usertype'readOnly defaultValue="Lector"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Perfil;


/**
 * <div class="switch">
      <div class="switch__1">
        <input id="switch-1" type="checkbox">
        <label for="switch-1"></label>
      </div>
      
      <div class="switch__2">
        <input id="switch-2" type="checkbox" checked>
        <label for="switch-2"></label>
      </div>
    </div>

    $shadow: .3rem .3rem .6rem #c8d0e7, -.2rem -.2rem .5rem #FFFFFF;
    $inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2), inset -.2rem -.2rem .5rem var(--white);

    <div class="chip">
      <div class="chip__icon">
        <ion-icon name="color-palette"></ion-icon></div>
      <p>Neumorphic Design</p>
      <div class="chip__close">
        <ion-icon name="close"></ion-icon>
      </div>
    </div>

background: rgba(255,255,255,0);
    box-shadow: .3rem .3rem .6rem #c8d0e7, -.2rem -.2rem .5rem #FFFFFF;
    border-radius: 5px;




    .chip {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  justify-self: center;
  width: 17rem;
  height: 4rem;
  border-radius: 1rem;
  box-shadow: $shadow;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__icon {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin: 0 0 0 .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: var(--primary);
  }

  p {
    font-size: .9rem;
    margin-left: -1.8rem;
    color: var(--greyDark);
  }

  &__close {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 .5rem;
    display: flex;
    font-size: 1.6rem;
    color: var(--greyLight-3);
    cursor: pointer;
  }
}
 */
