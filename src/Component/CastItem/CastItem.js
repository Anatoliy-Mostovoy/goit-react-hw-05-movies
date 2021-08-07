import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CastItem = ({ match }) => {
  const [casts, setCasts] = useState(null);

  const { castId } = match.params;

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${castId}/credits?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
      );
      setCasts(response.data.cast);
      return response;
    };
    fetcher();
  }, [castId]);

  return (
    <div>
      {casts && (
        <ul>
          {casts.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                />
                <h4>Character: {cast.character} </h4>
                <h4>Name: {cast.name}</h4>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
