import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import Home from './Home/Home';
import Reading from './Reading/Reading';
import Search from './Search/Search';
import { useDispatch } from 'react-redux';
import { authId } from '../Redux/actions/actions';
import UserPerfil from './UserPerfil/UserPerfil';

const Private = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { url, path } = useRouteMatch();

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();

        localStorage.setItem('hora', JSON.stringify(token));

        dispatch(authId(user.sub.split('|')[1]));
        setLoading(false);

      } catch (error) {
        console.log(error);
      }
    }

    getToken();
  }, []);
  

  return (
    !loading ?
    <>
      <SideBar url={url}/>
      <NavBar />
      <Switch>
        <Route exact path={path} component={Home}/>
        <Route exact path={`${path}/search`} component={Search}/>
        <Route exact path={`${path}/reading`} component={Reading}/>
        <Route path={`${path}/perfil`} component={UserPerfil} />
      </Switch>
    </>
    : null
  )
};

export default Private;

