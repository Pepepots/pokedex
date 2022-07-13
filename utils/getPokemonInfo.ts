import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async (nameOrId: string) => {

    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

        const { name, sprites, id } = data

        return {
            name,
            sprites,
            id
        }
    } catch (e) {
        return null
    }

}