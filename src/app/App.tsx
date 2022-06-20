import React, { useCallback, useEffect, useState } from 'react';

import api from '../service/api'
import Pokemon from '../core/dto/Pokemon'
import Card from '../ui/components/Card';

import styles from "./App.module.scss"

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>()

  const getPokemonPromises = () => {
    const pokemonPromisesAsArray = Array(150).fill(undefined).map(async (_, index) => {
      const response = await api.get<Pokemon>(`/pokemon/${index + 1}?limit=150`)
      return response.data
    })

    return pokemonPromisesAsArray
  }

  const getPokemons = useCallback(async () => {
    try {
      const pokemons = await Promise.all(getPokemonPromises())
      setPokemon(pokemons)
    } catch (error) {
      console.log(error)
    }
  }, []) 

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  return (
    <div className={styles.container}>
      <h1>Pokedex</h1>

      <div className={styles.pokemons}>
        {pokemon?.map((item, index) => {
          return (
            <Card pokemon={item} key={index} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
