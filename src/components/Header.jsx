import React from 'react'


export default function Header({setRegion, setSelectedPokemon}) {

    


    return (
        <header>
           <h1>Pokedex</h1> 
           <button onClick={() => { setRegion ({min:1, max:151})  ;setSelectedPokemon(null)}} >Kanto</button>
           <button onClick={() => {setRegion ({min:152, max:251});setSelectedPokemon(null)}}>Johto</button>
           <button onClick={() => {setRegion ({min:252, max:386});setSelectedPokemon(null)}}>Hoenn</button>

           <button onClick={() => {setRegion ({min:387, max:493});setSelectedPokemon(null)}}>Sinnoh</button>
           <button onClick={() => {setRegion ({min:494, max:649});setSelectedPokemon(null)}}>Unova</button>
           <button onClick={() => {setRegion ({min:650, max:721});setSelectedPokemon(null)}}>Kalos</button>

           <button onClick={() => {setRegion ({min:722, max:809});setSelectedPokemon(null)}}>Alola</button>
           <button onClick={() => {setRegion ({min:810, max:905});setSelectedPokemon(null)}}>Galar</button>
           <button onClick={() => {setRegion ({min:906, max:1025});setSelectedPokemon(null)}}>Paldea</button>
            </header>
    )
}