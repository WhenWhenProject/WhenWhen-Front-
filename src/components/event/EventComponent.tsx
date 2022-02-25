import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SubmitEvent from './SubmitEvent';

const EventComponent = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const handleInit = () => {
    navigate('/');
  };

  return (
    <StyledWrapper>
      <SubmitEvent type={type as string} />
      <div className="button-group">
        <button className="event-button init" onClick={handleInit}>
          처음으로
        </button>
        <button className="event-button result">
          {type === 'submit'
            ? '결과보기'
            : type === 'schedule'
            ? '공유하기'
            : '일정 내보내기'}
        </button>
      </div>
    </StyledWrapper>
  );
};

export default EventComponent;

const StyledWrapper = styled.div`
  z-index: 6;
  .button-group {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    .event-button {
      width: 282px;
      height: 84px;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 24px;
      border-radius: 10px;
    }
    .init {
      margin-right: 24px;
      background-color: #7d7d7d;
    }
    .result {
      background-color: #000070;
    }
  }
`;
