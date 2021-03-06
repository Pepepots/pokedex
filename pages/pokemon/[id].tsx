import { useState } from "react"

import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"

import confetti from 'canvas-confetti'

import { Layout } from "../../components/layouts"
import { getPokemonInfo, localFavorites } from "../../utils"
import { Sprites } from "../../interfaces"

interface Props {
    pokemon: {
        name: string;
        sprites: Sprites;
        id: number;
    }
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState( typeof window === 'object' && localFavorites.existInFavorites( pokemon.id ))

    const {name, id} = pokemon

    // Toggle es cuando una funcion pasa de on a off para este caso agregar eliminar de fav
    const onToggleFavorite = () => {
        localFavorites.toggleFavorite( {name, id} )
        setIsInFavorites( !isInFavorites )

        if ( isInFavorites ) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 1,
                    y: 0
                }
            })
        }

    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4} >
                    <Card isHoverable css={{ padding: '30px'}}>
                        <Card.Body>
                            <Card.Image 
                                src={ pokemon.sprites.other?.dream_world.front_default || 'no-image.png' }
                                alt={ pokemon.name }
                                width='100%'
                                height={ 200 }
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={ 12 } sm={ 8 }>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{ pokemon.name }</Text>

                            <Button
                                color='gradient'
                                ghost={ !isInFavorites }
                                onClick={ onToggleFavorite }
                            >
                                { isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={ 30 }>Sprites:</Text>

                            <Container direction="row" display='flex'>
                                <Image 
                                    src={ pokemon.sprites.front_default }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={ pokemon.sprites.back_default }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={ pokemon.sprites.front_shiny }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={ pokemon.sprites. back_shiny }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map((val, i) => `${i + 1}`)

    return {
        paths: pokemon151.map(id => ({
            params: { id }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    const pokemon = await getPokemonInfo( id )

    if ( !pokemon ) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon 
        }
    }
}

export default PokemonPage