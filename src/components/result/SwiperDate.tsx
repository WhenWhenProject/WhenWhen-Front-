import React from 'react';
import styled, { css } from 'styled-components';

const SwiperDate = ({ date, type }: { date?: string; type: string }) => {
  return (
    <StyledWrapper type={type}>
      <div>{date}</div>
    </StyledWrapper>
  );
};

export default SwiperDate;

const StyledWrapper = styled.div<{ type: string }>`
  ${({ type }) => css`
    display: flex;
    margin-top: 10px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 96px;
    font-size: 25px;
    background-color: ${type === 'false'
      ? '#707070'
      : type === 'pending'
      ? 'rgba(112,112,112,0.26)'
      : '#009432'};
    color: ${type === 'false'
      ? 'rgba(0,0,0,0.54)'
      : type === 'pending'
      ? '#000070'
      : 'white'};
    border: ${type === 'true' ? '4px solid #000070' : ''};
  `}
`;
