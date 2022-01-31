import React from 'react';
import styled from 'styled-components';
import { API_GOOGLE_REDIRECT } from '../../modules/api/keyFactory';

export default function GoogleLoginBtn() {
  return (
    <StyledBtn>
      <a href={API_GOOGLE_REDIRECT}>구글 로그인</a>
    </StyledBtn>
  );
}

const StyledBtn = styled.div`
  width: 200px;
  height: 100px;
  background-color: aliceblue;
`;
