import React from 'react';
import styled from 'styled-components';

const EventPage = () => {
  return (
    <StyledWrapper>
      <img className="img-outer" src="/img/event/Outer.png" alt="outer" />
      <img className="img-inner" src="/img/event/Inner.png" alt="inner" />
    </StyledWrapper>
  );
};

export default EventPage;

const StyledWrapper = styled.div``;
