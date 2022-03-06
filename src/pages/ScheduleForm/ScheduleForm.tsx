import React from 'react';
import styled, { css } from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import DateSelectBlock from '../../components/result/common/DateSelectBlock';
import ScheduleHostContainer from '../../components/result/common/ScheduleHostContainer';
import TimeSelectBlock from '../../components/result/common/TimeSelectBlock';

// 생성된 일정에 개개인의 일정을 기입하는 페이지
const ScheduleForm = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title={'나의 일정'} />
      <ScheduleHostContainer />
      <DateSelectBlock status="select" />
      <TimeSelectBlock status="select" />

      <div className="btn-container">
        <button className="btn-container__button--cancel">취소하기</button>
        <button className="btn-container__button--submit">제출하기</button>
      </div>
    </StyledWrapper>
  );
};

export default ScheduleForm;

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
  .btn-container {
    button {
      cursor: pointer;
      width: 282px;
      height: 80px;
      font-size: 24px;
      color: white;
      border: none;
      border-radius: 10px;
    }
    .btn-container__button--cancel {
      background-color: #7d7d7d;
      margin-right: 24px;
    }
    .btn-container__button--submit {
      background-color: #000070;
    }
  }
`;
