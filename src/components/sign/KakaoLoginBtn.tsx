import styled from "styled-components";
import { API_KAKAO_REDIRECT } from "../../modules/api/keyFactory";

const KakaoLoginBtn = () => {
  return (
    <StyledBtn>
      <a href={API_KAKAO_REDIRECT}>
        <img className="kakao-img" src="logo/kakao.png" alt="카카오 로그인" />
      </a>
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  border-radius: 12px;
  border: none;
  padding: 0;
  :hover {
    cursor: pointer;
  }
  a {
    display: flex;
  }
`;

export default KakaoLoginBtn;
