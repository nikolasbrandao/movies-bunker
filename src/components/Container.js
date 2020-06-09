import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  @media (min-width: 768px) {
    padding-top: 3em;
  }
`;
