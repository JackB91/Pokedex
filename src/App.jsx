import React ,{useState} from "react";
import Header from './components/Header'
import Footer from './components/footer'
import Region from './components/Region'
import PokemonCard from "./components/PokemonCard";



export default function App() {
    const [region, setRegion] = useState({min:1, max:151})
    const [pokemonData, setPokemonData] = useState([])
    const [selectedPokemon, setSelectedPokemon]= useState(null)


return (
    <main>
            <Header setRegion={setRegion}/>
            <Region 
                 min={region.min} 
                 max={region.max}
                 pokemonData ={pokemonData}
                 setPokemonData ={setPokemonData}
                 setSelectedPokemon = {setSelectedPokemon}
                 />

                 {/* TODO: {selectedPokemon && <PokemonCard pokemon={selectedPokemon}/>} */}
                 {selectedPokemon ? <PokemonCard pokemon={selectedPokemon}/>:null}
            {/* <Footer/> */}
    </main>
)

}