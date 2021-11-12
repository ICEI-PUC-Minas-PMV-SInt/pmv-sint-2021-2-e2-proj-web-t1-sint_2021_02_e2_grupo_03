import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private'
import Home from './Home/Home';
import Login from './Login/Login';
import EntradaSaidaVeiculos from './EntradaSaidaVeiculos/EntradaSaidaVeiculos';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path='/entradaveiculos' component={EntradaSaidaVeiculos} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
