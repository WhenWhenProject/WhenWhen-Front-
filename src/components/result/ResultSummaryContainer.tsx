import React from 'react';
import styled from 'styled-components';
import ResultSummaryBlock from './ResultSummaryBlock';

const ResultSummaryContainer = () => {
  return (
    <StyledWrapper>
      {/* TODO: 요약 결과 <요일-시간> 블록별로 컴포넌트화*/}
      <ResultSummaryBlock />
    </StyledWrapper>
  );
};

export default ResultSummaryContainer;

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 5px 0px 30px 0px;
  border: 1px solid rgba(112, 112, 112, 0.26);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
