import styled from "styled-components";
import { ClipboardList } from "@styled-icons/fa-solid/ClipboardList";

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2em 1em 1em 1em;
  @media (min-width: 768px) {
    align-items: center;
  }
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

  @media (min-width: 768px) {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-template-rows: repeat(auto-fill, 130px);
  }
`;

export const EmptyMoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  @media (min-width: 768px) {
    width: 58vw;
  }
`;

export const EmptyIcon = styled(ClipboardList)`
  color: ${({ theme }) => theme.secondaryLight};
  width: 2em;
  margin: 1em 0;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.primaryYellow};
  font-size: 1.1em;
  margin-bottom: 0.3em;
`;
