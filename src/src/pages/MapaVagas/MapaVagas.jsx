/* eslint-disable no-undef */
import Box from 'components/Box';
import React from 'react';
import Vaga from 'components/Vaga/Vaga';
import { useState, useEffect } from 'react';

//const jsonTeste = ['1', '2', '4'];
let jsonTeste = JSON.parse(localStorage.getItem('jsonVagas'));

const numeroVagas = 50;

const MapaVagas = () => (
  <React.Fragment>
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10,40px)',
        justifyContent: 'center',
        paddingTop: '100px',
      }}
    >
      {[...Array(numeroVagas)].map((elemento, index) => (
        <Vaga
          key={index}
          texto={index + 1}
          ocupado={jsonTeste.find((item) => item == index + 1)}
        />
      ))}
    </Box>
  </React.Fragment>
);

export default MapaVagas;
