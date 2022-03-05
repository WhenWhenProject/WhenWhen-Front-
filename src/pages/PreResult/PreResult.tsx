import React from 'react';
import styled, { css } from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import {
  pencil,
  people_plus,
  clock,
  location_pin,
} from '../../assets/NewSchedule/index';
import ResultBlock from '../../components/result/ResultBlock';
import SwiperBlock from '../../components/result/SwiperBlock';
import SwiperTimeBlock from '../../components/result/SwiperTimeBlock';
import ResultPeople from '../../components/result/ResultPeople';

const PreResult = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title={'결과'} />
      <div className="result-container">
        <ResultBlock img={pencil} altName="일정명" value="프로젝트 회의" />
        <ResultBlock
          img={location_pin}
          altName="장소명"
          value="왕십리역 6번 출구"
        />
        <ResultBlock img={clock} altName="시간" value="1시간" />
        <ResultBlock img={people_plus} altName="사람 수" value="5명" />
      </div>
      <div className="day container">
        <p className="title">요일</p>
        <div className="container_line" />
        <SwiperBlock />
      </div>
      <div className="time container">
        <p className="time title">시간</p>
        <div className="container_line" />
        <SwiperTimeBlock />
      </div>
      <div className="people container">
        <p className="title">가능 인원</p>
        <div className="container_line" />
        <ResultPeople />
      </div>
      <div className="btn-container">
        <button className="btn-left">내 일정 수정하기</button>
        <button className="btn-right">공유하기</button>
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

  .result-container {
    width: 588px;
    margin-top: 3vh;
    ${centerAlign}
    flex-direction: column;
    margin-bottom: 32px;
  }
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
    .btn-left {
      background-color: #7d7d7d;
      margin-right: 24px;
    }
    .btn-right {
      background-color: #000070;
    }
  }
  .container_line {
    border: 4px solid #000070;
    margin-bottom: 24px;
    max-width: 1200px;
  }
`;
