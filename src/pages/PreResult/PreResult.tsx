import React from 'react';
import styled from 'styled-components';
import PageTitleBar from '../../components/PageTitleBar';
import {
  pencil,
  people_plus,
  clock,
  date_calendar,
  location_pin,
  time_clock,
} from '../../assets/NewSchedule/index';

type InputData = {
  name: string;
  location: string;
  duration: string;
  people: string;
};

const PreResult = () => {
  return (
    <StyledWrapper>
      <PageTitleBar title={'결과'} />
    </StyledWrapper>
  );
};

export default PreResult;

const StyledWrapper = styled.div`
  margin-top: 70px;
  width: 67%;
`;
