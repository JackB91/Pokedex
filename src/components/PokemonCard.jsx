import React from "react";


export default function PokemonCard ({pokemon}) {
console.log(pokemon.name)


return (
    <div className="pokemon-card">
        <img  
            src={pokemon?.sprites?.other?.['official-artwork']?.front_default}
            alt={pokemon.name} />

        <h2>{pokemon.name}</h2>
        {/* <p>Height: {pokemon.height/10}m</p>
        <p>Weight: {pokemon.weight/10}kg</p> */}

        <h3>Base Stats</h3>
        <ul>
            {pokemon.stats.map((s) => (
                <li key={s.stat.name}>
                    {s.stat.name.toUpperCase()}: {s.base_stat} 
                </li>))
            }
        </ul>
        <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p>Moves: {pokemon.moves.slice(0, 5).map(m => m.move.name).join(", ")}</p>
        
    </div>
)
}