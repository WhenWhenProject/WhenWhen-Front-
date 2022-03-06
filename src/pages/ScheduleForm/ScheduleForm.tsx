import React from 'react';
import styled, { css } from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import ScheduleHostContainer from '../../components/result/common/ScheduleHostContainer';
import SwiperBlock from '../../components/result/SwiperBlock';
import SwiperTimeBlock from '../../components/result/SwiperTimeBlock';

// 생성된 일정에 개개인의 일정을 기입하는 페이지
const ScheduleForm = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title={'나의 일정'} />
      <ScheduleHostContainer />
      <div className="day container">
        <p className="title">요일</p>
        <div className="container_line" />
        <SwiperBlock status="select" />
      </div>
      <div className="time container">
        <p className="time title">시간</p>
        <div className="container_line" />
        <SwiperTimeBlock status="select" />
      </div>

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
  .container {
    color: #000070;
    width: 100%;
    margin-bottom: 48px;
    .title {
      font-size: 32px;
      margin-bottom: 0;
    }
  }
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
  .container_line {
    border: 4px solid #000070;
    margin-bottom: 24px;
    max-width: 1200px;
  }
`;
