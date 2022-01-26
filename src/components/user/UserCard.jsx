import React from 'react';
import st from './User.module.css';

const UserCard = ({img, name, typeUser}) => {
  return (
    <div className={st.user_card}>
      <img src={img} alt={name} />
      <div className={st.user_info}>
        <h4>welcome {name}</h4>
        <span>{typeUser}</span>
      </div>
    </div>
  )
};

export default UserCard;
