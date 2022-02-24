import React from "react";
import styled from "styled-components";

const ProfileBtn = () => {
  return (
    <StyledWrapper>
      <img
        style={{ width: "48px", height: "48px" }}
        src="/img/avatar.png"
        alt="avatar"
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
  .header-tail {
    height: 100%;
    width: 32px;
    background-color: #000070;
    margin-left: 8px;
  }
`;
