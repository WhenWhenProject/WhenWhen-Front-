import React from 'react';
import styled from 'styled-components';
import SwiperTimeBlock from '../SwiperTimeBlock';

type SelectStatus = 'select' | 'result';

const TimeSelectBlock = ({ status }: { status: SelectStatus }) => {
  return (
    <StyledWrapper>
      <div className="time container">
        <p className="time title">시간</p>
        <div className="container_line" />
        <SwiperTimeBlock status={status} />
      </div>
    </StyledWrapper>
  );
};

export default TimeSelectBlock;

const StyledWrapper = styled.div`
  max-width: 1200px;
  .container {
    color: #000070;
    width: 100%;
    margin-bottom: 48px;
    .title {
      font-size: 32px;
      margin-bottom: 0;
    }
  }
  .container_line {
    border: 4px solid #000070;
    margin-bottom: 24px;
    max-width: 1200px;
  }
`;
