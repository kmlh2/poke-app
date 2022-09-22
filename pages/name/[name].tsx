

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { pokeApi } from '../../api';
import { PokemonListResponse, PokemonResponse } from '../../interfaces';
import { getPokemon } from '../../utils';
import { PokemonDetail } from '../../components/pokemon';

interface Props {
    pokemon: PokemonResponse;
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
     
    //solo corre del lado del cliente
    // useEffect(()=>{
    //     const [isInFav, setIsInFav] = useState(localFavorites.existInFav(pokemon.id));
    // },[]);

    return (
        <PokemonDetail pokemon={pokemon}/>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
    const names: string[] = data.results.map(p => p.name);

    return {
        paths: names.map(name => ({
            params: {name}
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  
    const {name} = params as {name: string};
    const pokemon = await getPokemon(name);

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

export default PokemonByNamePage;