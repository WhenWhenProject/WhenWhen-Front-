import React from 'react';
import styled from 'styled-components';
import handleLogin from '../../modules/api/handleLogin';

const GoogleLoginBtn = () => {
  return (
    <StyledBtn onClick={() => handleLogin('google')}>
      <img className="login-img" src="/img/Google.png" alt="google" />
      <div className="login-text">구글로 로그인</div>
    </StyledBtn>
  );
};

export default GoogleLoginBtn;

const StyledBtn = styled.button`
  position: relative;
  display: flex;
  width: 384px;
  height: 60px;
  cursor: pointer;
  border: none;
  border: 2px solid rgba(0, 0, 0, 0.54);
  background-color: white;
  border-radius: 5px;
  align-items: center;
  .login-text {
    color: rgba(0, 0, 0, 0.54);
  }
  margin-bottom: 10px;
`;
