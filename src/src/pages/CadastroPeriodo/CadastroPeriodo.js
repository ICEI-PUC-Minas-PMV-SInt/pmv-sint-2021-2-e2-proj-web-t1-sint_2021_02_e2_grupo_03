import React from 'react';
import styled from 'styled-components';
import SalvarButton from 'components/Buttons/SalvarButton';
import { Formik, FastField, Form, FieldProps } from 'formik';
import Box from 'components/Box';
import TextInput from 'components/Input';
import Navbar from 'components/navbar/Navbar';

const H1 = styled.h1`
  font-size: 48px;
  line-height: 53px;
  padding-left: 300px;
`;

const BoxForm = styled(Box)`
  width: 1044px;
  height: 400px;
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

const CadastroPeriodo = () => (
  <React.Fragment>
    <div>
      <Navbar />
    </div>
    <Box>
      <H1>Cadastro de Período</H1>
      <BoxForm
        style={{
          marginLeft: '300px',
          right: '250px',
        }}
      >
        <Formik
          initialValues={{
            periodo: '',
            dataInicial: '',
            dataFinal: '',
            horaInicial: '',
            HoraFinal: '',
          }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values));
          }}
        >
          <Form>
            <BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Período:"
                  name="periodo"
                  type="text"
                  placeholder="Período vigente"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Data Inicial:"
                  name="data inicial"
                  type="date"
                  placeholder="Data inicial do período"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Data Final:"
                  name="data final"
                  type="date"
                  placeholder="Data final do período "
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Hora Inicial:"
                  name="hora inicial"
                  type="time"
                  placeholder="Hora inicial do período"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row">
                <TextInput
                  label="Hora Final:"
                  name="hora final"
                  type="time"
                  placeholder="Hora final do período"
                ></TextInput>
              </BoxInputs>
              <BoxInputs display="row"></BoxInputs>
            </BoxInputs>
            <SalvarButton type="submit">Salvar</SalvarButton>
          </Form>
        </Formik>
      </BoxForm>
    </Box>
  </React.Fragment>
);

export default CadastroPeriodo;
