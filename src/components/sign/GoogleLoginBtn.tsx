import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import handleLogin from '../../modules/api/handleLogin';

const GoogleLoginBtn = () => {
  const handleLogin = async () => {
    const res = axios.get(
      'http://ec2-13-125-111-105.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'
    );
    console.log(res);
    return res;
  };
  return (
    <StyledBtn onClick={handleLogin}>
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
