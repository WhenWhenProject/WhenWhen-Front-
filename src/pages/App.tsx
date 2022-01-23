import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Sign from "./sign/Sign";
import OauthRedirect from "./OauthRedirect";

function App() {
  return (
    <BrowserRouter>
      <StyledWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/sign/kakao/callback" element={<OauthRedirect />} />
        </Routes>
      </StyledWrapper>
    </BrowserRouter>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: #d6d6d6;
`;

export default App;
