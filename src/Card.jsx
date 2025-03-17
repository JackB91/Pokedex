import React from 'react'

export default function Card() {

    const [pokemonData, setPokemonData] = React.useState({})
    let min = 1;
    let max = 151;

    console.log(pokemonData)

    React.useEffect(() => {
        let num = Math.random() * (max - min) + min;
        let random = Math.floor(num);
        fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
        .then (res => res.json())
        .then(data => setPokemonData(data))
    },[])


    return (
        <main>
            <h1>It works</h1>
        </main>
    )  
}


