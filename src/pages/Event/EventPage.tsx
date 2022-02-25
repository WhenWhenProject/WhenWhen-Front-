import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const EventPage = () => {
  return (
    <StyledWrapper>
      <img className="img-outer" src="/img/event/Outer.png" alt="outer" />
      <img className="img-inner" src="/img/event/Inner.png" alt="inner" />
      <Outlet />
    </StyledWrapper>
  );
};

export default EventPage;

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-outer {
    position: absolute;
  }
  .img-inner {
    position: absolute;
    z-index: 5;
  }
`;
