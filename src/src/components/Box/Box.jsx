import React from 'react';

import styled, { css } from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(#EEFF00, #909090);
  height: 100vh;
  width: 100%;
  ${(props) =>
    props.display == 'row' &&
    css`
      flex-direction: row;
    `}
`;

export default Box;
