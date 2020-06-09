import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Title,
  SubTitle,
  CardMovie,
  LoadingIcon,
} from "../../components";
import * as CinemaService from "../../services/CinemaService";
import * as S from "./styles";
import { addMovie, removeMovie } from "../../redux/Movies";

const HomePage = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const listMovies = await CinemaService.findByTitle(movie);
      if (listMovies.Error) {
        throw new Error(listMovies.Error);
      }
      setMovies([...listMovies.Search]);
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

  const handleFavoriteButton = (item) => {
    const newListMovie = movies.map((movieItem) => {
      if (movieItem.imdbID === item.imdbID) {
        const newMovieInfo = {
          ...movieItem,
          Favorite: !movieItem.Favorite,
        };

        if (item.Favorite) {
          dispatch(removeMovie(newMovieInfo.imdbID));
        } else {
          dispatch(addMovie(newMovieInfo));
        }
        return newMovieInfo;
      }
      return movieItem;
    });
    setMovies(newListMovie);
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
        {loading ? (
          <S.LoadingWrapper>
            <LoadingIcon />
            <S.LoadingMessage>Buscando no catálogo</S.LoadingMessage>
          </S.LoadingWrapper>
        ) : (
          movies.map((movie) => (
            <CardMovie
              key={movie.imdbID}
              movie={movie}
              onPressFavorite={handleFavoriteButton}
            />
          ))
        )}
      </S.ResultMoviesWrapper>
    </Container>
  );
};

export default HomePage;
