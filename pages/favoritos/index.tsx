// import { Button } from '@nextui-org/react'
// import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react'
import { GetStaticProps, NextPage } from 'next'
// import { pokeApi } from '../api'
import { Layout } from '../../components/layouts'
// import { PokemonCard } from '../components/pokemon'
// import { PokemonListResponse, SmallPokemon } from '../interfaces';

// interface Props {
//   pokemons: SmallPokemon[];
// }

const Favoritos: NextPage = () => {

  // console.log(pokemons)
  
  return (
    <Layout title='Lista de favoritos'>
      
        <Text h1>Favoritos</Text>
      
    </Layout>
  )
}



export default Favoritos
