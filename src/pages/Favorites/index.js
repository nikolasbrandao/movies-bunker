import React from "react";
import { Container, Title, SubTitle } from "../../components";
import * as S from "./styles";

const FavoritesPage = () => (
  <Container>
    <S.TitleWrapper>
      <Title>Favoritos</Title>
      <SubTitle>Seus filmes prediletos.</SubTitle>
    </S.TitleWrapper>
  </Container>
);

export default FavoritesPage;
