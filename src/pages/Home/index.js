import React from "react";
import { Container, Title, SubTitle } from "../../components";
import * as S from "./styles";

const HomePage = () => (
  <Container>
    <S.TitleWrapper>
      <Title>Movies Bunker</Title>
      <SubTitle>Guarde o que há de mais precioso no cinema.</SubTitle>
    </S.TitleWrapper>
  </Container>
);

export default HomePage;
