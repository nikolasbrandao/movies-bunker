import React from "react";
import { Container, Title, SubTitle } from "../../components";
import * as S from "./styles";

const HomePage = () => (
  <Container>
    <S.TitleWrapper>
      <Title>Movies Bunker</Title>
      <SubTitle>Guarde o que há de mais precioso no cinema.</SubTitle>
    </S.TitleWrapper>
    <S.InputWrapper>
      <S.InputLabel>Pesquise por um filme</S.InputLabel>
      <S.InputRow>
        <S.Input type="text" placeholder="Nome do filme" />
        <S.InputButton>Pesquisar</S.InputButton>
      </S.InputRow>
    </S.InputWrapper>
    <div>
      <ul>
        <li>Filme</li>
      </ul>
    </div>
  </Container>
);

export default HomePage;
