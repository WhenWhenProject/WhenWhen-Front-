import React from 'react';
import styled from 'styled-components';
import handleLogin from '../../modules/api/handleLogin';

const NaverLoginBtn = () => {
  return (
    <StyledBtn onClick={() => handleLogin('naver')}>
      <img className="login-img" src="/img/Naver.png" alt="Naver" />
      <div className="login-text">네이버로 로그인</div>
    </StyledBtn>
  );
};

export default NaverLoginBtn;

const StyledBtn = styled.button`
  position: relative;
  display: flex;
  width: 384px;
  height: 60px;
  cursor: pointer;
  border: none;
  background-color: #03c75a;
  border-radius: 5px;
  align-items: center;
  .login-text {
    color: white;
  }
`;
