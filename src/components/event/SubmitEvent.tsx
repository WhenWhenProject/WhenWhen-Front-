import React from 'react';
import styled from 'styled-components';

const SubmitEvent = ({ type }: { type: string }) => {
  return (
    <StyledWrapper>
      <p className="event-text">
        {type === 'init'
          ? '일정이 생성되었습니다.'
          : type === 'submit'
          ? '제출이 완료되었습니다.'
          : '일정이 확정되었습니다.'}
      </p>
      <img
        className="event-img"
        src={`/img/event/${type}.png`}
        alt="eventImg"
      />
    </StyledWrapper>
  );
};

export default SubmitEvent;

const StyledWrapper = styled.div`
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .event-text {
    font-size: 50px;
    color: #000070;
  }
`;
