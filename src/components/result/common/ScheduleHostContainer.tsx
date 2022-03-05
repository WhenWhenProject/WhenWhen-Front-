import React from 'react';
import styled, { css } from 'styled-components';
import ResultBlock from '../ResultBlock';
import SwiperBlock from '../SwiperBlock';
import SwiperDateBlock from '../SwiperDateBlock';
import {
  pencil,
  people_plus,
  clock,
  location_pin,
} from '../../../assets/NewSchedule/index';

const ScheduleHostContainer = () => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

export default ScheduleHostContainer;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  ${centerAlign}
  flex-direction: column;
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
`;
