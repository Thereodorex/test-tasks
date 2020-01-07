import React from 'react';
import styled from 'styled-components';

import styles from './styles.css';

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
`;

const Row = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row wrap;

  &.header {

  }

  &.main {
    
  }
`;

const Header = () => <Row className={styles.header}/>;

export const Item = props => {
  return (
    <Wrapper>
      <Header />
      <Row />
      <Row />
    </Wrapper>
  );
}