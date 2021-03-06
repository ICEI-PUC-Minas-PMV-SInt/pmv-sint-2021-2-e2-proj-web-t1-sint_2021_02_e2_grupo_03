import React from 'react';
import styled from 'styled-components';
import SalvarButton from 'components/Buttons/SalvarButton';
import { Formik, FastField, Form, FieldProps } from 'formik';
import Box from 'components/Box';
import TextInput from 'components/Input';

const H1 = styled.h1`
  font-size: 48px;
  line-height: 53px;
  padding-left: 300px;
`;

const BoxForm = styled(Box)`
  width: 1044px;
  height: 600px;
  left: 21px;
  top: 110px;
  background: rgba(144, 144, 144, 0.7);
  border-radius: 10px;
`;

const BoxInputs = styled(BoxForm)`
  width: 1044px;
  left: 21px;
  top: 110px;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  border-radius: 10px;
`;

const EntradaSaidaVeiculos = () => (
  <React.Fragment>
    <Box>
      <H1>Entrada e Saida de Veículos</H1>
      <BoxForm
        style={{
          marginLeft: '300px',
          right: '250px',
        }}
      >
        <Formik
          initialValues={{
            proprietario: '',
            veiculo: '',
            marca: '',
            modelo: '',
            placa: '',
            vaga: '',
          }}
          onSubmit={(values) => {
            let vagasArray = JSON.parse(localStorage.getItem('jsonVagas'));
            vagasArray.push(values.vaga);
            localStorage.setItem('jsonVagas', JSON.stringify(vagasArray));
          }}
        >
          <Form>
            <BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Proprietario:"
                  name="proprietario"
                  type="text"
                  placeholder="Nome do proprietario do veículo"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Veiculo:"
                  name="veiculo"
                  type="text"
                  placeholder="Veículo"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Marca:"
                  name="marca"
                  type="text"
                  placeholder="Marca"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Modelo:"
                  name="modelo"
                  type="text"
                  placeholder="Modelo"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Placa:"
                  name="placa"
                  type="text"
                  placeholder="Placa"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="N° da vaga ocupada:"
                  name="vaga"
                  type="text"
                  placeholder="Numero da Vaga Ocupada"
                ></TextInput>
              </BoxInputs>
            </BoxInputs>
            <SalvarButton type="submit">Salvar</SalvarButton>
          </Form>
        </Formik>
      </BoxForm>
    </Box>
  </React.Fragment>
);

export default EntradaSaidaVeiculos;
