import { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Card, Grid } from '@nextui-org/react';
import { localFavorites } from '../../utils';
import { NoFavorites } from '../../components/ui'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon';

type pokeLocal = {
    id: number,
    name: string
}

const FavoritesPage: NextPage = () => {

    const [favoritesPokemons, setFavoritesPokemons] = useState<pokeLocal[]>([])

    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons())
    }, [])


    return (
        <Layout title='Pokemons - Favoritos'>
            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                        <FavoritePokemons pokemons={ favoritesPokemons }/>
                    )
            }
        </Layout>
    )
}

export default FavoritesPage