import React from 'react';
import styled from 'styled-components';
import handleLogin from '../../modules/api/handleLogin';

const KakaoLoginBtn = () => {
  return (
    <StyledBtn onClick={() => handleLogin('kakao')}>
      <img className="login-img" src="img/Kakao.png" alt="kakao" />
      <div className="login-text">카카오로 로그인</div>
    </StyledBtn>
  );
};

export default KakaoLoginBtn;

const StyledBtn = styled.button`
  position: relative;
  display: flex;
  width: 384px;
  height: 60px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fee500;
  .login-text {
    color: black;
  }
`;
