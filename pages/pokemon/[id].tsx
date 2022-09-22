


import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { PokemonResponse } from '../../interfaces';
import { getPokemon } from '../../utils';
import { PokemonDetail } from '../../components/pokemon';

interface Props {
    pokemon: PokemonResponse;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
    

    return (
        <PokemonDetail pokemon={pokemon}/>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemon151 = [...Array(151)].map((value, index)=> `${index +1}`);
    
    return {
        paths: pokemon151.map(id => ({
            params: {id}
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  
    const {id} = params as {id: string};
    const pokemon = await getPokemon(id);

    if(!pokemon){
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
      props: {
        pokemon
      },
      revalidate: 86400, //60 * 60 * 24
    }
}

export default PokemonPage;