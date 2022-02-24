import React, { useEffect } from 'react';
import styled from 'styled-components';
import LandingComponent from '../../components/main/LandingComponent';

const Main = () => {
  const handleScroll = () => {
    console.log('scroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledWrapper>
      <LandingComponent />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div``;
