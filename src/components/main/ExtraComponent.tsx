import React from 'react';
import styled from 'styled-components';

const ExtraComponent = () => {
  return <StyledWrapper>hello</StyledWrapper>;
};

export default ExtraComponent;

const StyledWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  background-color: white;
`;
