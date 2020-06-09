import React, { useState } from "react";
import { Container, Title, SubTitle, CardMovie } from "../../components";
import * as CinemaService from "../../services/CinemaService";
import * as S from "./styles";

const HomePage = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const listMovies = await CinemaService.findByTitle(movie);
      if (listMovies.Error) {
        throw new Error(listMovies.Error);
      }
      console.log("listMovies", listMovies);
      setMovies([...movies, ...listMovies.Search]);
    } catch (error) {
      console.log("Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitButton = () => {
    if (loading) {
      return;
    }
    setMovies([]);
    handleSearch();
  };

  return (
    <Container>
      <S.TitleWrapper>
        <Title>Movies Bunker</Title>
        <SubTitle>Guarde o que há de mais precioso no cinema.</SubTitle>
      </S.TitleWrapper>
      <S.InputWrapper>
        <S.InputLabel>Pesquise por um filme</S.InputLabel>
        <S.InputRow>
          <S.Input
            type="text"
            placeholder="Nome do filme"
            onChange={(event) => setMovie(event.target.value)}
            value={movie}
          />
          <S.InputButton onClick={handleSubmitButton}>Pesquisar</S.InputButton>
        </S.InputRow>
      </S.InputWrapper>
      <S.ResultMoviesWrapper>
        {movies.map((movie) => (
          <CardMovie key={movie.imdbID} movie={movie} />
        ))}
      </S.ResultMoviesWrapper>
    </Container>
  );
};

export default HomePage;
