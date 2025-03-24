import React from 'react'


export default function Header({setRegion}) {

    


    return (
        <header>
           <h1>Pokedex</h1> 
           <button onClick={() => setRegion ({min:1, max:151})}>Kanto</button>
           <button onClick={() => setRegion ({min:152, max:251})}>Johto</button>
           <button onClick={() => setRegion ({min:252, max:386})}>Hoenn</button>

           <button onClick={() => setRegion ({min:387, max:493})}>Sinnoh</button>
           <button onClick={() => setRegion ({min:494, max:649})}>Unova</button>
           <button onClick={() => setRegion ({min:650, max:721})}>Kalos</button>

           <button onClick={() => setRegion ({min:722, max:809})}>Alola</button>
           <button onClick={() => setRegion ({min:810, max:905})}>Galar</button>
           <button onClick={() => setRegion ({min:906, max:1025})}>Paldea</button>
            </header>
    )
}