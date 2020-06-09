import styled, { keyframes } from "styled-components";
import { Loader } from "@styled-icons/boxicons-regular/Loader";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(Loader)`
  color: ${({ theme }) => theme.secondaryLight};
  width: 2em;
  margin: 1em 0;
  animation: ${rotate} 2s linear infinite;
`;
