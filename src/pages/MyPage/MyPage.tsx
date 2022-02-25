import React from 'react';
import styled, { css } from 'styled-components';
import ScheduleBlock from '../../components/mypage/ScheduleBlock';
import ScheduleBlockContainer from '../../components/mypage/ScheduleBlockContainer';
import PageTitleBar from '../../components/PageTitleBar';

const MyPage = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title="마이페이지" />
      <div className="schedule-container-wrapper">
        <ScheduleBlockContainer title="미확정된 일정">
          <ScheduleBlock type="not-fixed" />
        </ScheduleBlockContainer>
        <ScheduleBlockContainer title="확정된 일정">
          <ScheduleBlock type="fixed" />
        </ScheduleBlockContainer>
      </div>
    </StyledWrapper>
  );
};

export default MyPage;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  ${centerAlign};
  flex-direction: column;
  margin-top: 80px;
  .schedule-container-wrapper {
    ${centerAlign};
  }
`;
