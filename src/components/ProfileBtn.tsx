import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mypage');
  };
  return (
    <StyledWrapper>
      <img
        style={{ width: '48px', height: '48px' }}
        src="/img/avatar.png"
        alt="avatar"
        onClick={handleClick}
      />
      <div className="header-tail" />
    </StyledWrapper>
  );
};

export default ProfileBtn;

const StyledWrapper = styled.div`
  flex-basis: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    cursor: pointer;
  }
  .header-tail {
    height: 100%;
    width: 32px;
    background-color: #000070;
    margin-left: 8px;
  }
`;
