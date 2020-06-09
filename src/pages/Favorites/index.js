import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Title, SubTitle, CardMovie } from "../../components";
import { addMovie, removeMovie } from "../../redux/Movies";
import * as S from "./styles";

const FavoritesPage = () => {
  const movies = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  const handleFavoriteButton = (item) => {
    const newMovie = { ...item, Favorite: !item.Favorite };
    if (newMovie.Favorite) {
      dispatch(addMovie(newMovie));
    } else {
      dispatch(removeMovie(newMovie.imdbID));
    }
  };
  return (
    <Container>
      <S.TitleWrapper>
        <Title>Favoritos</Title>
        <SubTitle>Seus filmes prediletos.</SubTitle>
      </S.TitleWrapper>
      <S.ResultMoviesWrapper>
        {movies.length ? (
          movies.map((movie) => (
            <CardMovie
              key={movie.imdbID}
              movie={movie}
              onPressFavorite={handleFavoriteButton}
            />
          ))
        ) : (
          <S.EmptyMoviesWrapper>
            <S.EmptyIcon />
            <S.EmptyMessage>
              Sua lista está vazia, registre seus filmes preferidos.
            </S.EmptyMessage>
          </S.EmptyMoviesWrapper>
        )}
      </S.ResultMoviesWrapper>
    </Container>
  );
};

export default FavoritesPage;
