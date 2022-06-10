import Pokemon from "../../core/dto/Pokemon";

import styles from "../styles/components/Card.module.scss"

interface CardProps {
  pokemon: Pokemon
}

function Card({ pokemon }: CardProps) {
  return (
    <div className={styles.container}>
      <h2>{pokemon.name} | {pokemon.id}</h2>
      
      <p>
        experience: {pokemon.base_experience}
      </p>

      <p>
        height: {pokemon.height} | weight: {pokemon.weight}
      </p>
    </div>
  )
}

export default Card