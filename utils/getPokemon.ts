

import { pokeApi } from '../api';
import { PokemonResponse } from '../interfaces';

export const getPokemon = async (nameOrId: string) => {
    
    const {data} = await pokeApi.get<PokemonResponse>(`/pokemon/${nameOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
    
}