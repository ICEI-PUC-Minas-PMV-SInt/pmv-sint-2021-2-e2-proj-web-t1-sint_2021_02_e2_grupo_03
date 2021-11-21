/* eslint-disable no-undef */

import React from "react";
import styled from "styled-components";



 const Vaga =  styled.div`
  height: 80px;
  width: 40px;
  background-color: gray;
  border-style: solid;
  margin: 1px;
  `;

let Vagas = 50


const TotalVagas = () => [...Array(Vagas)].map( elemento => { 
    return (<Vaga></Vaga>);
  });

export default TotalVagas


