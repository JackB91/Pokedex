import React from 'react' 

export default function Region ({min,max,pokemonData,setPokemonData}) {

    React.useEffect(() => {

        const fetchData = async() => {

        const pokemonInfo =[];
        
        for (let i =min; i<=max;i++) {
            pokemonInfo.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }

        const allPokemon = await Promise.all(pokemonInfo)
    
        setPokemonData(allPokemon)
    }

    fetchData()
},[min,max])






return (
    <main className="pokedex-container">
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            onClick={() => alert(`You clicked on ${pokemon.name}!`)} // You can add your click functionality here
          />
          {/* <p>{pokemon.name.toUpperCase()}</p> Maybe add each name in future */}
        </div>
      ))}
    </main>
  );

}