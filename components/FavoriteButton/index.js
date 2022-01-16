import { useState, useEffect } from 'react';
import { useFavorites } from '../../hooks/useFavorite';
import { Button } from '../../styles/Button/Button';

export const FavoriteButton = ({ id, item }) => {
    const [favorites, createFavorites, deleteFavorite] = useFavorites();
    const [isFavorited, setFavorited] = useState(false);

    useEffect(() => {
        const searchFavorited = favorites.filter((fav) => fav.id === id);
        if (searchFavorited.length > 0) {
            setFavorited(true);
        } else {
            setFavorited(false);
        }
    }, [favorites]);

    if (isFavorited) {
        return (
            <Button
                className="favorite-button"
                secondary
                onClick={() => {
                    deleteFavorite(id);
                }}
            >

                <i className="las la-trash" />
                {" "} Eliminar de favoritos
            </Button>
        );
    } else {
        return (
            <Button
                className="favorite-button"
                onClick={() => {
                    createFavorites(item);
                }}
            >
                <i className="las la-star" />
                {" "} Agregar a favoritos
            </Button>
        );
    }
};