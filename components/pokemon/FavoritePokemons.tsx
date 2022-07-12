import { FC } from "react"
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from "./";

type pokeLocal = {
    id: number,
    name: string
}

interface Props {
    pokemons: pokeLocal[]
}

const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map( poke => (
                    <FavoriteCardPokemon id={poke.id} key={poke.id} name={poke.name}/>
                ))
            }
        </Grid.Container>
    )
}

export default FavoritePokemons