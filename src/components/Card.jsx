import React from 'react'

export default function Card() {

    const [pokemonData, setPokemonData] = React.useState({})
    let min = 1;
    let max = 151;

    

    React.useEffect(() => {
        let num = Math.random() * (max - min) + min;
        let random = Math.floor(num);
        fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
        .then (res => res.json())
        .then(data => setPokemonData(data))
    },[])
    console.log(pokemonData)


    return (
        <main>
         <h1>{pokemonData.name? pokemonData.name.toUpperCase() :"Loading..."}</h1>
         <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} />
            
        </main>
    )  
}


