import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { CastItem } from '../Component/CastItem/CastItem';

export const FilmsDetailView = ({ match }) => {
  const [film, setFilm] = useState(null);

  const { filmId } = match.params;

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
      );
      setFilm(response.data);
      return response;
    };
    fetcher();
  }, [filmId]);

  return (
    <>
      {film && (
        <>
          <h3>Its details films {filmId} </h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt="film"
          />
          <h3>
            <span>{film.title}</span>
            <span>{film.release_date}</span>
          </h3>
          <h3>User score: {film.popularity.toFixed()}%</h3>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {film.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          <h3>Additional information</h3>
          <Link to={`${match.url}/${film.id}`}>Cast</Link>
          <Route path={`${match.path}/:castId`} component={CastItem} />
          <p>Review</p>
        </>
      )}
    </>
  );
};
