import styled from "styled-components";

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2em 1em 1em 1em;
`;

export const ResultMoviesWrapper = styled.div`
  height: 65vh;
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
