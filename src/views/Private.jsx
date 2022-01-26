import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import Home from './Home/Home';
import Reading from './Reading/Reading';
import Search from './Search/Search';
import { helpHttp } from '../helpers/helpHttp';

const Private = () => {
  const { user } = useAuth0();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    helpHttp().post("",{})
  }, []);
  

  return (
    <>
      <SideBar url={url}/>
      <NavBar />
      <Switch>
        <Route exact path={path} component={Home}/>
        <Route exact path={`${path}/search`} component={Search}/>
        <Route exact path={`${path}/reading`} component={Reading}/>
      </Switch>
    </>
  )
};

export default Private;

