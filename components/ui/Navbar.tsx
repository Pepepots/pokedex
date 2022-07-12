import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px 0 5px',
            backgroundColor: theme?.colors.gray50.value
        }}>

            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
                alt='Icono de la app'
                width={70}
                height={70}
            />

            <NextLink href='/'>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <Link>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>

        </div>
    )
}

export default Navbar