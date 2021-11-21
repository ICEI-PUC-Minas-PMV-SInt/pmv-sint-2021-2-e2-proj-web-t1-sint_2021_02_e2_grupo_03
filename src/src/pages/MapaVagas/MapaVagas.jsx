import Box from 'components/Box';
import React from 'react';
import P from 'components/P';
import Vaga from 'components/Vaga/Vaga';

let qtdVagas = 50;

const MapaVagas = () => (
  <React.Fragment>
    <div style= {{
      display:'grid',
      height:'100%',
      gridTemplateColumns: 'repeat(10,40px)'
    }} >
    {[...Array(qtdVagas)].map( (elemento,indice) => (<Vaga key={indice} ></Vaga>))} </div>
  </React.Fragment>
);

export default MapaVagas;
