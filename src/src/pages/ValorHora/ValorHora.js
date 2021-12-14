import React from 'react';
import styled from 'styled-components';
import SalvarButton from 'components/Buttons/SalvarButton';
import { Formik, FastField, Form, FieldProps } from 'formik';
import Box from 'components/Box';
import TextInput from 'components/Input';

const H1 = styled.h1`
    font-size: 48px;
    line-height: 73px;
`;

const H2 = styled.h2`
    font-size: 28px;
    line-height: 200px;
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

const ValorHora = () => (
<React.Fragment>
    <Box>
        <H1>Valor Hora</H1>
        <H2>Tabela de Valores</H2>
        <BoxForm
        style={{
            marginLeft: '300px',
            right: '250px',
        }}
        >
        <Formik
            initialValues={{
            titulo: '',
            valorHora: '',
            valorHoraAcrescimo: '',
            periodo: '',
            }}
            onSubmit={(values) => {
            console.log(JSON.stringify(values));
            }}
        >
            <Form>
            <BoxInputs>
                <BoxInputs display="row">
                <TextInput
                    label="Título:"
                    name="tituo"
                    type="text"
                    placeholder=" "
                ></TextInput>
                </BoxInputs>
                <BoxInputs display="row">
                <TextInput
                    label="Valor Hora (R$):"
                    name="valor hora"
                    type="number"
                    placeholder=" "
                ></TextInput>
                </BoxInputs>
                <BoxInputs display="row">
                <TextInput
                    label="Valor Acrescimo Hora (R$):"
                    name="valor acrescimo hora"
                    type="number"
                    placeholder=" "
                ></TextInput>
                </BoxInputs>
                <BoxInputs display="row">
                <TextInput
                    label="Período:"
                    name="periodo"
                    type="text"
                    placeholder="Período"
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

export default ValorHora;
