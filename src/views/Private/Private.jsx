import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SideBar from '../../components/SideBar/SideBar';
import Home from './Home/Home';

const Private = () => {
  const { url, path } = useRouteMatch();

  return (
    <>
      <SideBar url={url}/>
      <Switch>
        <Route path={path} component={Home}/>
      </Switch>
    </>
  )
};

export default Private;

