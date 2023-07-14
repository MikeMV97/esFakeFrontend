import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const arrayFavorites =
      JSON.parse(window.localStorage.getItem('favorites')) || [];
    setFavorites(arrayFavorites);
  }, []);

  const createFavorite = (item) => {
    const newFavorites = [...favorites, { ...item }];

    setFavorites(newFavorites);

    window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (id) => {
    const arrayFavorites = JSON.parse(window.localStorage.getItem('favorites'));

    const deletedFavorites = arrayFavorites.filter((fav) => fav.id !== id);

    setFavorites(deletedFavorites);
    
    window.localStorage.setItem('favorites', JSON.stringify(deletedFavorites));
  };

  return [favorites, createFavorite, removeFavorite];
};