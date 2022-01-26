import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import store from './Redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="heredero.us.auth0.com"
      clientId="Lg7o5JYF8mZfAkqMUVB9SeQVWYMm4Xx9"
      redirectUri={window.location.origin}
      >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

