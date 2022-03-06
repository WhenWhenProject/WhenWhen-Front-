import React from 'react';
import styled from 'styled-components';
import SwiperBlock from '../../../components/result/SwiperBlock';

type SelectStatus = 'select' | 'result';

const DateSelectBlock = ({ status }: { status: SelectStatus }) => {
  return (
    <StyledWrapper>
      <div className="day container">
        <p className="title">요일</p>
        <div className="container_line" />
        <SwiperBlock status={status} />
      </div>
    </StyledWrapper>
  );
};

export default DateSelectBlock;

const StyledWrapper = styled.div`
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
