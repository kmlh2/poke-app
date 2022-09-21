import { Text } from '@nextui-org/react'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';


const Favoritos: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, []);
    
  return (
    <Layout title='Lista de favoritos'>
      
      {
        favoritePokemons.length === 0 
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={favoritePokemons} /> )
      }
      
    </Layout>
  )
}



export default Favoritos
