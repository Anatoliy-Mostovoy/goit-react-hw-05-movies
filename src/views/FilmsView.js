import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const FilmsView = ({ match }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=f4d5ed62044715aa9c5e4de0663d29b2',
    );
    setFilms(response.data.results);
    return response;
  };

  return (
    <>
      <h2>This is books list</h2>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${match.url}/${film.id}`}>
                {film.title ? film.title : film.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// f4d5ed62044715aa9c5e4de0663d29b2
