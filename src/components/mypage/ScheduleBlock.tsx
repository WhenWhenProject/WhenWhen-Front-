import React from 'react';
import styled, { css } from 'styled-components';
import { blue_clock, blue_pencil, share } from '../../assets/MyPage/index';

// 컴포넌트: 마이페이지에 담기는 스케줄 각각의 블록
// 확정된 일정은 초록색, 확정되지 않은 일정은 남색
const ScheduleBlock = ({ type }: { type: string }) => {
  return (
    <StyledWrapper type={type}>
      <div className="schedule-block">
        {type === 'not-fixed' ? (
          <div className="schedule-date-container">
            <p className="date-text">미정</p>
          </div>
        ) : (
          <div className="schedule-date-container">
            <div className="date-container">
              <p className="date-text">2/1(목)</p>
              <p className="date-text">18:00</p>
            </div>
          </div>
        )}

        <div className="schedule-data-container">
          <div className="schedule-name-container">
            <img className="label-image" src={blue_pencil} alt="name" />
            <p className="label-name">프로젝트 회의</p>
          </div>
          <div className="schedule-duration-container">
            <img className="label-image" src={blue_clock} alt="duration" />
            <p className="label-name">2시간</p>
          </div>
          <div className="schedule-people-container">
            <div className="people-tag filled">
              <p className="people-name">임의진</p>
            </div>
            <div className="people-tag not-filled">
              <p className="people-name">임의진</p>
            </div>
          </div>
          <div className="share-container">
            <img className="share-img" src={share} alt="share" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ScheduleBlock;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div<{ type: string }>`
  ${centerAlign};
  .schedule-block {
    width: 100%;
    height: 120px;
    border: ${(props) =>
      props.type === 'not-fixed'
        ? '1.5px solid #000070'
        : '1.5px solid #009432'};
    ${centerAlign};
    margin-bottom: 20px;
    .schedule-date-container {
      background-color: ${(props) =>
        props.type === 'not-fixed' ? '#000070' : '#009432'};
      width: 25%;
      height: 100%;
      ${centerAlign};
      .date-text {
        color: #fff;
      }
    }
    .schedule-data-container {
      width: 75%;
      height: 100%;
      padding: 6px;
      position: relative;
      .schedule-name-container,
      .schedule-duration-container,
      .schedule-people-container {
        width: 85%;
        height: 30%;
        margin: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .label-image {
          width: 18px;
        }
        .label-name {
          margin-left: 10px;
        }
        .people-tag {
          padding: 1px;
          min-width: 50px;
          height: 25px;
          border-radius: 3px;
          margin-right: 3px;
          ${centerAlign};
          .people-name {
            font-size: 13px;
            color: #fff;
          }
        }
        .filled {
          background-color: ${(props) =>
            props.type === 'not-fixed' ? '#000070' : '#009432'};
        }
        .not-filled {
          background-color: #d6d6d6;
          p {
            display: none;
          }
        }
      }
      .share-container {
        width: 30px;
        height: 30px;
        border: 1.5px solid #000070;
        position: absolute;
        ${centerAlign};
        top: 8px;
        right: 8px;
      }
    }
  }
`;
