import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.active ? '#2196F3' : '#9ABBCE'};
  border-radius: 2px;
`;

const CheckMark = styled.div`
  margin: 4px 0 0 4px;
  width: 10px;
  height: 6px;
  border-bottom: 2px solid #2196F3;
  border-left: 2px solid #2196F3;
  transform: rotate(-45deg);
`;

export const Box = ({active}) => {
  return (
    <StyledBox active={active}>
        {active ? <CheckMark /> : null}
    </StyledBox>
  );
}