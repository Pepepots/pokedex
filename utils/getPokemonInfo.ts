import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async ( nameOrId: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    const { name, sprites, id } = data
    
    return {
        name,
        sprites,
        id
    }
}