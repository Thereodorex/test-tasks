import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  flex: 1 1 0;
  background-color: ${props => props.active ? '#2196F3' : 'white'};
  color: ${props => props.active ? 'white' : '#4A4A4A'};
  border: 1px solid #DFE5EC;
  display: flex;
  line-height: 20px;
  font-size: 12px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;

  &.right {
    border-right: '1px solid #DFE5EC';
    border-left: 0;
    border-radius: 0 5px 5px 0;
  }

  &.left {
    border-right: 0;
    border-left: '1px solid #DFE5EC';
    border-radius: 5px 0 0 5px;
  }

  &:hover {
    background-color: ${props => props.active ? '#2196F3' : '#F1FCFF'}; 
  }
`;

export const MyButton = ({value, ...props}) => (
  <Wrapper {...props}>{value}</Wrapper>
);
