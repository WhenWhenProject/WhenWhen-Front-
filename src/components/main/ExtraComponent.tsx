import React from 'react';
import styled from 'styled-components';

const ExtraComponent = () => {
  return <StyledWrapper>hello</StyledWrapper>;
};

export default ExtraComponent;

const StyledWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  margin-top: 70px;
  background-color: red;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
