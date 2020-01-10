import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  flex: 1 1 0;
  background-color: ${props => props.active ? '#2196F3' : 'white'};
  color: ${props => props.active ? 'white' : '#4A4A4A'};
  border: 1px solid #DFE5EC;
  border-right: ${props => props.border == 'right' ? '1px solid #DFE5EC' : '0'};
  border-left: ${props => props.border == 'left' ? '1px solid #DFE5EC' : '0'};
  border-top-right-radius: ${props => props.border == 'right' ? '5px' : '0'};
  border-bottom-right-radius: ${props => props.border == 'right' ? '5px' : '0'};
  border-top-left-radius: ${props => props.border == 'left' ? '5px' : '0'};
  border-bottom-left-radius: ${props => props.border == 'left' ? '5px' : '0'};
  display: flex;
  line-height: 20px;
  font-size: 12px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.active ? '#2196F3' : '#F1FCFF'}; 
  }
`;

export const MyButton = props => (
  <Wrapper {...props}>{props.value}</Wrapper>
);
