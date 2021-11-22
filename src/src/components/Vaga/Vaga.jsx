/* eslint-disable no-undef */

import React from "react";
import styled from "styled-components";
import { FaCar } from 'react-icons/fa';


 const ContainerVaga =  styled.div`
  height: 80px;
  width: 40px;
  background-color: gray;
  border-style: solid;
  margin: 1px;
  `;

const Vaga = ({ocupado,texto}) => (
  <ContainerVaga> 
   { ocupado ? <FaCar /> : <p>{texto}</p>}
  </ContainerVaga>
)
export default Vaga


