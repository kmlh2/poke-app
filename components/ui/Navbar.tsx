

import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from "next/image";
import NextLink from "next/link";

const pk = Math.floor(Math.random() * 151) + 1;

export const Navbar = () => {
  // const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: 'red'
        // backgroundColor: theme?.colors.red50.value
    }}>
        
        <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk}.png`}
            alt="icono"
            width={70}
            height={70}
        />
        <NextLink href='/' passHref>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>
        </NextLink>
        <Spacer css={{ flex: 1 }}/>
        <NextLink href='/favoritos' passHref>
          <Link>
            <Text color="white" >Favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}
