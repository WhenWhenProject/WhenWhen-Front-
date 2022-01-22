import React from "react";
import styled from "styled-components";

function App() {
  return (
    <StyledWrapper>
      <header className="App-header">hello</header>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: red;
`;

export default App;
