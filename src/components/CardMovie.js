import React from "react";
import styled from "styled-components";
import { Star as StartOutline } from "@styled-icons/boxicons-regular/Star";
import { Star as StarSolid } from "@styled-icons/boxicons-solid/Star";

const CardMovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.secondaryLight};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const CardImage = styled.img`
  height: 80px;
  width: 56px;
`;

const CardInfosWrapper = styled.div`
  width: 60%;
`;

const CardTitle = styled.p`
  font-size: 1.1em;
  font-weight: 500;
`;

const CardSubtitle = styled.p`
  font-size: 0.9em;
  font-weight: 300;
`;

const StarOutlineIcon = styled(StartOutline)`
  color: ${({ theme }) => theme.primaryOrange};
  width: 2em;
  margin: 1em 0;
`;

const StarSolidIcon = styled(StarSolid)`
  color: ${({ theme }) => theme.primaryOrange};
  width: 2em;
  margin: 1em 0;
`;

const FavoriteButton = styled.span``;

const CardMovie = ({ movie, onPressFavorite }) => {
  return (
    <CardMovieWrapper>
      <CardImage src={movie.Poster} alt={movie.Title} />
      {/* {movie.Poster !== "N/A" ? <CardImage /> : <LoadingIcon />} */}
      <CardInfosWrapper>
        <CardTitle>{movie.Title}</CardTitle>
        <CardSubtitle>Ano: {movie.Year}</CardSubtitle>
      </CardInfosWrapper>
      <FavoriteButton onClick={() => onPressFavorite(movie)}>
        {movie.Favorite ? <StarSolidIcon /> : <StarOutlineIcon />}
      </FavoriteButton>
    </CardMovieWrapper>
  );
};

export default CardMovie;
