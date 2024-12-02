import Pokemon from "../../pokemons/domain/Pokemon"

export default interface Entrenador{
    id: Number
    nombre: String,
    pokemons : Pokemon[];
}