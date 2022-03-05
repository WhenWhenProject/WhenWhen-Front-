import React from 'react';
import styled, { css } from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import SwiperBlock from '../../components/result/SwiperBlock';
import SwiperDateBlock from '../../components/result/SwiperDateBlock';
import ResultPeople from '../../components/result/ResultPeople';
import ScheduleHostContainer from '../../components/result/common/ScheduleHostContainer';

const PreResult = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title={'결과'} />
      <ScheduleHostContainer />
      <div className="day container">
        <p className="title">요일</p>
        <div className="container_line" />
        <SwiperBlock type="result" />
      </div>
      <div className="time container">
        <p className="time title">시간</p>
        <div className="container_line" />
        <SwiperDateBlock />
      </div>
      <div className="people container">
        <p className="title">가능 인원</p>
        <div className="container_line" />
        <ResultPeople />
      </div>
      <div className="btn-container">
        <button className="btn-container__button--modify">
          내 일정 수정하기
        </button>
        <button className="btn-container__button--share">공유하기</button>
      </div>
    </StyledWrapper>
  );
};

export default PreResult;

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
  .people {
    margin-bottom: 92px;
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
    .btn-container__button--modify {
      background-color: #7d7d7d;
      margin-right: 24px;
    }
    .btn-container__button--share {
      background-color: #000070;
    }
  }
  .container_line {
    border: 4px solid #000070;
    margin-bottom: 24px;
    max-width: 1200px;
  }
`;
