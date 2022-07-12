import { FC } from "react"
import { useRouter } from "next/router"
import { Card, Grid } from "@nextui-org/react"

interface Props {
    id: number;
    name: string
}

const FavoriteCardPokemon: FC<Props> = ({ id, name }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/name/${name}`)
    }

    return (
        <Grid key={id} xs={6} sm={3} xl={1}>
            <Card isHoverable isPressable css={{ padding: 10 }} onClick={ onFavoriteClicked }>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}

export default FavoriteCardPokemon