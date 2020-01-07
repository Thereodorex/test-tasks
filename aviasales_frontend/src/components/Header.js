import React from 'react';
import styled from 'styled-components';

import logo from '../img/Logo.svg';

const Wrapper = styled.div`
  margin-top: 50px;
  width: 60px;
  height: 60px;
`;

export const Header = props => {
  return (
    <Wrapper>
      <img src={logo} href='#' alt="Avia_logo"/>
    </Wrapper>
  );
}