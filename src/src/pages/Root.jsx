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
        <Route exact path="/" component={PainelControle} />
        <Route exact path="/cadastro-periodo" component={CadastroPeriodo} />
        <Route exact path="/cadastro-usuario" component={CadastroUsuario} />
        <Route exact path="/reservas" component={Reservas} />
        <Route exact path="/valor-hora" component={ValorHora} />
        <Route exact path="/mapa-vagas" component={MapaVagas} />
        <Route exact path="/entrada-veiculos" component={EntradaSaidaVeiculos } />
      </Switch>
    </StoreProvider>

  </Router>
);

export default PagesRoot;
