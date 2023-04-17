import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
`;

const rotate = keyframes`
  from {
      transform: rotate(0deg) scale(0.5);
    }
    to {
      transform: rotate(360deg) scale(1);
    }
`;

export const Overlay = styled.div`
  margin: 20px auto 0px auto;

  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: 1px dashed teal;

  -webkit-animation: rotate 1s;

  animation: ${rotate} 1s infinite linear;
`;
