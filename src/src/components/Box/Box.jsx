import React from 'react';

import styled, { css } from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(
    180deg,
    #eeff00 0%,
    rgba(238, 255, 0, 0) 91.15%
  );
  height: 100vh;
  width: 100vw;
  ${(props) =>
    props.display == 'row' &&
    css`
      flex-direction: row;
    `}
`;

export default Box;
