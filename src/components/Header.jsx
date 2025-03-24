import React from 'react'


export default function Header({setRegion}) {

    


    return (
        <header>
           <h1>Pokedex</h1> 
           <button onClick={() => setRegion ({min:1, max:151})}>Kanto</button>
           <button onClick={() => setRegion ({min:152, max:251})}>Johto</button>
           <button onClick={() => setRegion ({min:252, max:386})}>Hoenn</button>
            </header>
    )
}