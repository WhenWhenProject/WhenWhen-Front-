import React from 'react';
import styled from 'styled-components';

const people = ['임의진', '권순우', '박수경', '최한영', '배병재'];

const ResultPeople = () => {
  return (
    <StyledWrapper>
      {people.map((person) => (
        <div className="people-container">{person}</div>
      ))}
    </StyledWrapper>
  );
};

export default ResultPeople;

const StyledWrapper = styled.div`
  border: 1px solid rgba(112, 112, 112, 0.26);
  max-width: 1200px;
  height: 100px;
  padding: 30px;
  display: flex;
  align-items: center;
  .people-container {
    width: 96px;
    height: 40px;
    background-color: #009432;
    border-radius: 5px;
    margin-right: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;
