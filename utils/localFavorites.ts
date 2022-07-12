type pokeLocal = {
    id: number,
    name: string
}

const toggleFavorite = ( pokemon: pokeLocal )=> {

    let favorites: pokeLocal[]  = JSON.parse( localStorage.getItem( 'favorites') || '[]' )

    
    if (existInFavorites(pokemon.id)) {
        favorites = favorites.filter( poke=> poke.id !== pokemon.id)
    } else {
        favorites.push( pokemon )
    }
    
    localStorage.setItem('favorites', JSON.stringify( favorites ))

}

const existInFavorites = (id: number): boolean => {

    let favorites: pokeLocal[] = JSON.parse( localStorage.getItem( 'favorites') || '[]' )
    
    let exist: boolean = false
    favorites.forEach( obj => { obj.id === id ? exist = true : exist = false })

    return exist

}

const pokemons = (): pokeLocal[] => {
    return JSON.parse( localStorage.getItem( 'favorites') || '[]' ) 
}

const funciones = { toggleFavorite, existInFavorites, pokemons }

export default funciones