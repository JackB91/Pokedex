import React from 'react' 

export default function Kanto () {

    const [pokemonData, setPokemonData] = React.useState([])

    React.useEffect(() => {

        const fetchData = async() => {

        const pokemonInfo =[];
        for (let i =1; i<=151;i++) {
            pokemonInfo.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }

        const allPokemon = await Promise.all(pokemonInfo)
    
        setPokemonData(allPokemon)
    }

    fetchData()
},[])






return (
    <main className="pokedex-container">
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            onClick={() => alert(`You clicked on ${pokemon.name}!`)} // You can add your click functionality here
          />
        </div>
      ))}
    </main>
  );

}