import Label from 'components/Label';
import { useField } from 'formik';
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 390px;
  height: 47px;
  left: 247px;
  top: 143px;
  background: transparent;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  margin: 15px;
  ::placeholder {
    color: #808080;
    opacity: 1;
  }
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...field} {...props}></Input>
    </>
  );
};

export default TextInput;
