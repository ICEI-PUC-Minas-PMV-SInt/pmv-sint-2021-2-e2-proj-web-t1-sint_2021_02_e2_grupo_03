import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';
import PainelControle from './PainelControle/PainelControle';
import CadastroPeriodo from './CadastroPeriodo/CadastroPeriodo';
import CadastroUsuario from './CadastroUsuario/CadastroUsuario';
import Reservas from './Reservas/Reservas';
import ValorHora from './ValorHora/ValorHora';
import Login from './Login/Login';
import Navbar from '../components/navbar/Navbar';
import '../App.css';
import MapaVagas from './MapaVagas/MapaVagas';
import EntradaSaidaVeiculos from './EntradaSaidaVeiculos/EntradaSaidaVeiculos';


const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Navbar  />
      <Switch>
        <Route exact path="/login" component={Login} />
        <RoutesPrivate exact path="/" component={PainelControle} />
        <RoutesPrivate exact path="/cadastro-periodo" component={CadastroPeriodo} />
        <RoutesPrivate exact path="/cadastro-usuario" component={CadastroUsuario} />
        <RoutesPrivate exact path="/reservas" component={Reservas} />
        <RoutesPrivate exact path="/valor-hora" component={ValorHora} />
        <RoutesPrivate exact path="/mapa-vagas" component={MapaVagas} />
        <Route
          exact
          path="/entrada-veiculos"
          component={EntradaSaidaVeiculos }
        />
      </Switch>
    </StoreProvider>

  </Router>
);

export default PagesRoot;
