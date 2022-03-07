import React from 'react';
import styled from 'styled-components';
import { green_check } from '../../assets/NewSchedule';

const ResultGroupTitleBar = ({ title }: { title: string }) => {
  return (
    <StyledWrapper>
      <img src={green_check} alt="green_check" />
      <p>{title}</p>
    </StyledWrapper>
  );
};

export default ResultGroupTitleBar;

const StyledWrapper = styled.div`
  width: 100%;
  background-color: #000070;
  margin: 10px 0px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  img {
    height: 20px;
    margin-right: 5px;
  }
  p {
    color: white;
  }
`;
