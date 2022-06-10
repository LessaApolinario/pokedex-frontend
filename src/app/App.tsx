import React, { useEffect, useState } from 'react';

import api from '../service/api'
import Pokemon from '../core/dto/Pokemon'

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>()

  useEffect(() => {
    try {
      const getPokemonPromises = () => {
        const pokemonPromisesAsArray = Array(150).fill(undefined).map(async (_, index) => {
          const response = await api.get<Pokemon>(`/pokemon/${index + 1}?limit=150`)
          return response.data
        })

        return pokemonPromisesAsArray
      }

      const pokemonPromises = Promise.all(getPokemonPromises()).then(pokemons => {
        setPokemon(pokemons)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="App">
      {pokemon?.map((item, index) => {
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