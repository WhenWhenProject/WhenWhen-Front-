import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileBtn from './ProfileBtn';

const NavigationBar = () => {
  const navigate = useNavigate();
  const todayDate = () => {
    const today = new Date();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${month}월 ${day}일`;
  };

  const handleClick = () => {
    navigate('/');
  };
  return (
    <StyledWrapper>
      <div className="logo-box">
        <div className="logo-box-head" />
        <img
          style={{ width: '48px', height: '60px' }}
          src="/img/whenwhen.png"
          alt="logo"
          onClick={handleClick}
        ></img>
        <div className="logo-box__title" onClick={handleClick}>
          whenwhen
        </div>
      </div>
      <div className="date-box">{todayDate()}</div>
      <ProfileBtn />
    </StyledWrapper>
  );
};

export default NavigationBar;

const StyledWrapper = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  color: #000070;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 8px #ffd500;
  border: 1px solid #95989a;
  height: 72px;
  .logo-box {
    flex-basis: 33%;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    .logo-box-head {
      height: 100%;
      width: 32px;
      background-color: #009432;
      margin-right: 40px;
    }
    img {
      margin-right: 16px;
    }
    img,
    .logo-box__title {
      cursor: pointer;
    }
  }
  .date-box {
    flex-basis: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
`;
