// import { Button } from '@nextui-org/react'
import { Grid } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {

  // console.log(pokemons)
  
  return (
    <Layout title='Listado de pokemon'>
      
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((p) =>  (
            <PokemonCard key={p.id} pokemon={p}/>
          ))}
        </Grid.Container>
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async(ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map((poke, i)=> ({
    ...poke, 
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg` 
  }));

  return {
    props: {
      name: 'KML',
      pokemons
    }, 
  }
}

export default Home
