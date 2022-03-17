import React from 'react';
import styled, { css } from 'styled-components';
import SwiperDate from './SwiperDate';

const sampleDay = ['수', '목', '금'];
const sampleTime = [12, 13, 14];

const ResultSummaryBlock = () => {
  return (
    <StyledWrapper>
      {sampleDay.map((day, i) => (
        <div className="swiper-container_small">
          <div key={i} className="swiper-block">
            <div className="swiper-day-block">{day}</div>
            <SwiperDate type="result" status="true" />
          </div>
          <div className="swiper-time-block--wrapper">
            {sampleTime.map((time, i) => (
              <div className="swiper-time-block">
                <div className="swiper-time-block__text">{time}</div>
                <SwiperDate type="result" status="true" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledWrapper>
  );
};

export default ResultSummaryBlock;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 95%;
  .swiper-container_small {
    display: flex;
    align-items: center;
    min-width: auto;
    height: 180px;
    border-bottom: 1px solid #707070;
    margin-bottom: 5px;
    transition: transform 0.3s;
    .swiper-block {
      width: 96px;
      margin-left: 10px;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      .swiper-day-block {
        border: 1px solid #707070;
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        border-radius: 5px;
        ${centerAlign}
        color: #000070;
        font-size: 24px;
        margin-right: 20px;
      }
      .check-container {
        ${centerAlign};
      }
    }
    .swiper-time-block--wrapper {
      padding: 0px 30px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      overflow-x: visible;
      overflow-y: scroll;
      .swiper-time-block {
        margin-right: 15px;
        &__text {
          width: 100%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          color: #000070;
          font-size: 24px;
        }
      }
    }
  }
`;
