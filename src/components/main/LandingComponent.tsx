import React from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useGetUser } from '../../hooks/sign/useGetUser';
import LoginGroup from '../sign/LoginGroup';

const arrowAnimation = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
    transform: translateY(-10px);
  }
  100%{
    opacity: 0;
  }
`;

const LandingComponent = () => {
  const navigate = useNavigate();
  const login = useGetUser('login');
  const handleSchedule = () => {
    navigate('/schedule/new');
  };
  return (
    <StyledWrapper>
      <div className="main-wrapper">
        <div className="main-text">
          <div>
            빠르고 간편하게
            <br /> 지인들과 일정을 잡으세요.
          </div>
        </div>
        {login.isLogin ? (
          <button className="main-btn" onClick={handleSchedule}>
            일정 생성하기
          </button>
        ) : (
          <LoginGroup />
        )}
      </div>
      <img src="/img/main.png" className="main-img" alt="main" />
      <img src="/img/arrow.png" className="main-arrow" alt="arrow" />
    </StyledWrapper>
  );
};

export default LandingComponent;

const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  .main-wrapper {
    position: relative;
    margin-top: 158px;
    text-align: center;
    display: flex;
    justify-content: center;
    .main-text {
      font-size: 60px;
      color: #000070;
      line-height: 70px;
      margin-bottom: 50px;
    }
    .main-btn {
      position: absolute;
      bottom: 200px;
      width: 384px;
      height: 60px;
      color: white;
      font-size: 16px;
      background-color: #000070;
      border: none;
      cursor: pointer;
      border-radius: 8px;
    }
  }
  .main-img {
    z-index: -1;
    position: absolute;
    top: 100px;
    width: 1000px;
    height: 700px;
  }
  .main-arrow {
    height: 96px;
    width: 96px;
    position: absolute;
    bottom: 10px;
    animation: ${arrowAnimation} 2s infinite;
  }
  @media screen and (max-width: 1024px) {
    .main-img {
      width: 976px;
      height: 700px;
    }
  }
`;
