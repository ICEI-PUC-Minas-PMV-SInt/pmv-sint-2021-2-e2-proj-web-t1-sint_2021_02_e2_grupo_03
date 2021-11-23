/* eslint-disable no-undef */
import Box from 'components/Box';
import React from 'react';
import P from 'components/P';
import Vaga from 'components/Vaga/Vaga';
import { FaCar } from 'react-icons/fa';


const jsonTeste = [{
  vaga:0
  },
  {
    vaga: 1
    },
    {
      vaga: 2,
      },
      { }]


const arrayteste = []
jsonTeste.map((elemento,index) => ( arrayteste[elemento.vaga]=elemento.vaga ));
console.log([...arrayteste]);



const MapaVagas = () => (
  <React.Fragment>
    <Box style= {{
      display:'grid',
      gridTemplateColumns: 'repeat(10,40px)',
      justifyContent:'center',
      paddingTop:'100px'
    }} >
    {[...arrayteste].map( (elemento,index) => (<Vaga key={index} texto={index} ocupado ={jsonTeste.find( (item) => item.vaga=== index)   }/>))} </Box>
  </React.Fragment>
);

export default MapaVagas;
