import React from 'react';
import styled from 'styled-components';
import SalvarButton from 'components/Buttons/SalvarButton';
import { Formik, FastField, Form, FieldProps } from 'formik';
import Box from 'components/Box';
import Label from 'components/Label';

const H1 = styled.h1`
  font-size: 48px;
  line-height: 53px;
`;

const BoxForm = styled(Box)`
  width: 1044px;
  height: 484px;
  left: 21px;
  top: 110px;
  background: rgba(144, 144, 144, 0.7);
  border-radius: 10px;
`;

const EntradaSaidaVeiculos = () => (
  <React.Fragment>
    <Box>
      <H1>Entrada e Saida de Veículos</H1>
      <BoxForm>
        <Formik>
          <Form>
            <Label>Teste: </Label>
            <FastField
              name='proprietario'
              placeholder='Proprietario'
            ></FastField>
            <Label>Teste: </Label>
            <FastField name='Proprietario'></FastField>
            <Label>Teste: </Label>
            <FastField name='Proprietario'></FastField>
          </Form>
        </Formik>
      </BoxForm>
      <SalvarButton>Teste</SalvarButton>
    </Box>
  </React.Fragment>
);

export default EntradaSaidaVeiculos;
