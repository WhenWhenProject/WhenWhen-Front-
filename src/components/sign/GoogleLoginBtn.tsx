import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import api from '../../modules/api/api';
import { API_LOGIN } from '../../modules/api/keyFactory';

const id = 'abc123';
const pw = '1234';

const GoogleLoginBtn = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const res = await api.POST({
      url: API_LOGIN,
      data: {
        username: id,
        password: pw,
      },
    });
    const { accessToken, refreshToken } = res.data.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };
  return (
    <StyledBtn onClick={handleLogin}>
      <img className="login-img" src="/img/Google.png" alt="google" />
      <div className="login-text">로그인하기</div>
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
