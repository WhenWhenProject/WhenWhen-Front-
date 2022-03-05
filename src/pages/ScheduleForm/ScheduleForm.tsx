import React from 'react';
import styled, { css } from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import ScheduleHostContainer from '../../components/result/common/ScheduleHostContainer';

// 생성된 일정에 개개인의 일정을 기입하는 페이지
const ScheduleForm = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title={'나의 일정'} />
      <ScheduleHostContainer />
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
`;
