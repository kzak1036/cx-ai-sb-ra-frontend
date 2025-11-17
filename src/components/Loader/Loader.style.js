import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0; /* cover the whole viewport to truly center */
  width: 100vw;
  height: 100vh;
`;

export const Spinner = styled.div`
  border: 6px solid ${({ theme }) => theme.palette.colors.gray200};
  border-top: 6px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export const Message = styled.p`
  margin-top: 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.colors.gray900};
`;
