import Pokemon from "../../core/dto/Pokemon";

import styles from "../styles/components/Card.module.scss"

interface CardProps {
  pokemon: Pokemon
}

function Card({ pokemon }: CardProps) {
  const className = `${styles.container} ${styles[pokemon.types[0].type.name]}`
  
  return (
    <div className={className}>
      <h2>{pokemon.id}. {pokemon.name}</h2>
      
      <p>
        experience: {pokemon.base_experience} | type: {pokemon.types[0].type.name}
      </p>

      <p>
        height: {pokemon.height} | weight: {pokemon.weight}
      </p>
    </div>
  )
}

export default Card