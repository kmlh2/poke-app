


const toggleFavorites = (id: number) => {
    console.log("toggleFav");

    let fav: number[] = JSON.parse(localStorage.getItem('fav') || '[]');

    if(fav.includes(id)){
        fav = fav.filter(pId => pId !== id)
    }else{
        fav.push(id)
    }

    localStorage.setItem('fav', JSON.stringify(fav)); 

}

export default {
    toggleFavorites,
}