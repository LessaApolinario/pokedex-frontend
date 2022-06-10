interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
  base_experience: number
  types: [
    {
      slot: number
      type: {
        name: string
      }
    }
  ]
}

export default Pokemon