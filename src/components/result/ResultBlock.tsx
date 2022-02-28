import React from 'react';
import styled from 'styled-components';

type ResultProps = {
  img: string;
  altName: string;
  value: string;
};

const ResultBlock = ({ img, altName, value }: ResultProps) => {
  return (
    <StyledWrapper>
      <div className="image-container">
        <img className="label-image" src={img} alt={altName} />
      </div>
      <input className="result-text" disabled defaultValue={value}></input>
    </StyledWrapper>
  );
};

export default ResultBlock;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  .image-container {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 27px;
  }
  .result-text {
    background-color: white;
    border: 1px solid #d8d8d8;
    color: #000070;
    width: 470px;
    height: 40px;
    padding: 0 10px;
  }
`;
