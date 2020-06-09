import styled from "styled-components";

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2em 1em 1em 1em;
`;

export const InputWrapper = styled.section`
  display: flex;
  width: 90%;
  margin: 5%;
  flex-direction: column;
  justify-content: center;
`;

export const InputLabel = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.secondaryGray};
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
  background-color: ${({ theme }) => theme.primaryGray};
  border: 1px solid ${({ theme }) => theme.primaryGray};
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
    border-color: ${({ theme }) => theme.primaryOrange};
    background-color: ${({ theme }) => theme.primaryOrange};
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
`;
