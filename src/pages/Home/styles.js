import styled from "styled-components";

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2em 1em 1em 1em;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const InputWrapper = styled.section`
  display: flex;
  width: 90%;
  margin: 5%;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InputLabel = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.primaryYellow};
  font-size: 1.1em;
  margin-bottom: 0.3em;
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.4em;
`;

export const Input = styled.input`
  width: 70%;
  padding: 0.4em;
  font-size: 1.1em;
  background-color: ${({ theme }) => theme.primaryYellow};
  border: 1px solid ${({ theme }) => theme.primaryYellow};
  border-right: none;
  color: ${({ theme }) => theme.primaryDark};
  border-radius: 2px;
  :focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.primaryDark};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.primaryDark};
  }
`;

export const InputButton = styled.button`
  width: 30%;
  color: ${({ theme }) => theme.primaryDark};
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.primaryGreen};
  border-left: none;
  background-color: ${({ theme }) => theme.primaryGreen};
  border-radius: 0 30px 30px 0px;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${({ theme }) => theme.secondaryGreen};
    background-color: ${({ theme }) => theme.secondaryGreen};
    color: ${({ theme }) => theme.primaryLight};
  }
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
  @media (min-width: 768px) {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  @media (min-width: 768px) {
    width: 60vw;
    justify-content: flex-start;
  }
`;

export const LoadingMessage = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.primaryYellow};
`;
