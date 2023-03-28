import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
const pokemonList = [
  {
    name:"bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const pokemon = pokemonList[0];

function App() {
  const [count, setCount] = useState(0)

  


  return (
    <div className="App">
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc}/>
    </div>
    
  )
}

export default App;
