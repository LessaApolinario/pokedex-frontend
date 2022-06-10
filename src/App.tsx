import React, { useEffect, useState } from 'react';
//import './App.css';
import api from './service/api'

import Pokemon from './core/dto/Pokemon'
import PokemonPromise from './core/dto/PokemonPromise';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    async function getPokemonpromises() {
      try {
        const response = await api.get<PokemonPromise>(`/pokemon/?limit=150`)
        let data = response.data.results

        const pokemonPromises = Promise.all(response.data.results).then(pokemons => {
          console.log(pokemons)
          setPokemon(pokemons)
        })
        .catch(error => {
          console.log(error)
        })
        
      } catch (error) {
        console.log(error)
      }
    }

    getPokemonpromises()
  }, [])

  return (
    <div className="App">
      {pokemon.map((item, index) => {
        return (<div key={index}>
          <p>{item.name}</p>
          <p>{item.id}</p>
          <p>{item.height}</p>
          <p>{item.weight}</p>
          <p>{item.base_experience}</p>
        </div>
        )
      })}
    </div>
  );
}

export default App;
