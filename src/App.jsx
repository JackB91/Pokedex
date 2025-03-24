import React from "react";
// import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/footer'
import Region from './components/Region'



export default function App() {
    const [region, setRegion] = React.useState({min:1, max:151})
    const [pokemonData, setPokemonData] = React.useState([])


return (
    <main>
            <Header setRegion={setRegion}/>
            {/* <Card/> */}
            <Region 
                 min={region.min} 
                 max={region.max}
                 pokemonData ={pokemonData}
                 setPokemonData ={setPokemonData}
                 />
            <Footer/>
    </main>
)

}