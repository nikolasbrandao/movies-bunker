import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryDark};
  font-size: 2em;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.secondaryGray};
  font-size: 1em;
`;
