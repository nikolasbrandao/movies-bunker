import styled from "styled-components";
import { ClipboardList } from "@styled-icons/fa-solid/ClipboardList";

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2em 1em 1em 1em;
`;

export const ResultMoviesWrapper = styled.div`
  height: 80vh;
  width: 92%;
  margin: 4%;
  padding-left: 1%;
  padding-right: 1%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

export const EmptyMoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export const EmptyIcon = styled(ClipboardList)`
  color: ${({ theme }) => theme.secondaryColor};
  width: 2em;
  margin: 1em 0;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.secondaryGray};
  font-size: 1.1em;
  margin-bottom: 0.3em;
`;
