import React from 'react';
import styled, { css } from 'styled-components';
import { title_calendar } from '../assets/NewSchedule';

type TitleProps = {
  title: string;
};

// 어떤 페이지인지 알려주는 타이틀 바
const PageTitleBar = (props: TitleProps) => {
  const { title } = props;

  return (
    <StyledWrapper>
      <div className="title-container">
        <img className="title-image" src={title_calendar} alt="" />
        <h1>{title}</h1>
      </div>
    </StyledWrapper>
  );
};

export default PageTitleBar;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 10vh;
  ${centerAlign};
  .title-container {
    width: 500px;
    height: 100%;
    ${centerAlign}
    .title-image {
      width: 50px;
      margin-right: 5px;
    }
    h1 {
      color: #000070;
      font-weight: normal;
      margin-left: 5px;
    }
  }
`;
