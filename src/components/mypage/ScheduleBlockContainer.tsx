import React from 'react';
import styled, { css } from 'styled-components';

type titleProps = {
  title: string;
  children: React.ReactNode;
};

const ScheduleBlockContainer = ({ title, children }: titleProps) => {
  return (
    <StyledWrapper>
      <div className="schedule-block-container">
        <p className="title">{title}</p>
        {children}
      </div>
    </StyledWrapper>
  );
};

export default ScheduleBlockContainer;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  ${centerAlign};
  margin-top: 30px;
  flex-direction: column;
  .schedule-block-container {
    width: 500px;
    height: 650px;
    margin: 0 10px;
    padding: 0 15px;
    border: 1.5px solid rgba(112, 112, 112, 0.26);
    overflow: scroll;
    p {
      font-size: 18px;
      color: #000070;
    }
  }
`;
