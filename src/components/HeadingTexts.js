import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryDark};
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.primaryYellow};
  font-size: 1em;
`;
