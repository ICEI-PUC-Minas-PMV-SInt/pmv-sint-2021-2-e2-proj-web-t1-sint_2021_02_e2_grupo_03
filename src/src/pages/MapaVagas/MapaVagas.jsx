/* eslint-disable no-undef */
import Box from 'components/Box';
import React from 'react';
import Vaga from 'components/Vaga/Vaga';

const jsonTeste = [
  {
    vaga: 4,
  },
  {
    vaga: 1,
  },
  {
    vaga: 6,
  },
  {
    vaga: 12,
  },
  { vaga: 13 },
  { vaga: 3 },
];

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
          ocupado={jsonTeste.find((item) => item.vaga === index + 1)}
        />
      ))}
    </Box>
  </React.Fragment>
);

export default MapaVagas;
