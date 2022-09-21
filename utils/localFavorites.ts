


const toggleFavorites = (id: number) => {

    let fav: number[] = JSON.parse(localStorage.getItem('fav') || '[]');

    if(fav.includes(id)){
        fav = fav.filter(pId => pId !== id)
    }else{
        fav.push(id)
    }

    localStorage.setItem('fav', JSON.stringify(fav)); 

}

const existInFav = (id: number): boolean => {

    if(typeof window === 'undefined') return false;

    const fav: number[] = JSON.parse(localStorage.getItem('fav') || '[]');
    return fav.includes(id)
} 

const pokemons = (): number[] => {
    return JSON.parse( localStorage.getItem('fav') || '[]' );
}

export default {
    toggleFavorites,
    existInFav,
    pokemons
}