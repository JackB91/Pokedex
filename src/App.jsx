import React ,{useState} from "react";
import Header from './components/Header'
import Footer from './components/footer'
import Region from './components/Region'
import PokemonCard from "./components/PokemonCard";



export default function App() {
    const [region, setRegion] = useState({min:1, max:151})
    const [pokemonData, setPokemonData] = useState([])
    const [selectedPokemon, setSelectedPokemon]= useState(null)
    console.log("Selected Pokémon:", selectedPokemon);

    const closeModal = () => {
        setSelectedPokemon(null);
        document.body.classList.remove('blur-background');  // Remove background blur
      };
    
    //   const openModal = () => {
    //     document.body.classList.add('blur-background');  // Add background blur
    //   };


return (
    <main>
            <Header setRegion={setRegion} setSelectedPokemon={setSelectedPokemon}/>
            <Region
                 min={region.min} 
                 max={region.max}
                 pokemonData ={pokemonData}
                 setPokemonData ={setPokemonData}
                 setSelectedPokemon = {setSelectedPokemon}
                 />

        
                 {selectedPokemon && (
        <div className="modal-overlay" style={{ display: 'flex' }}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <PokemonCard pokemon={selectedPokemon} />
          </div>
        </div>
      )}
            {/* <Footer/> */}
    </main>
)

}