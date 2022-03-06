import React from 'react';
import styled, { css } from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import DateSelectBlock from '../../components/result/common/DateSelectBlock';
import ScheduleHostContainer from '../../components/result/common/ScheduleHostContainer';
import TimeSelectBlock from '../../components/result/common/TimeSelectBlock';

// 모두가 적었으면 최종 결과 페이지, 한 명이라도 적지 않은 사람이 있으면 중간 결과 페이지
const ScheduleResult = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title="결과" />
      <ScheduleHostContainer />
      <DateSelectBlock status="result" />
      <TimeSelectBlock status="result" />
    </StyledWrapper>
  );
};

export default ScheduleResult;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  margin-top: 80px;
  width: 67%;
  ${centerAlign}
  flex-direction: column;
  margin-bottom: 62px;
`;
