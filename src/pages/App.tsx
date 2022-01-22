import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Sign from "./Sign/Sign";

function App() {
  return (
    <BrowserRouter>
      <StyledWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign" element={<Sign />} />
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
