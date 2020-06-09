import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
`;
