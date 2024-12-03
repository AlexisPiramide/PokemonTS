import Pokemon from "../../pokemons/domain/Pokemon"
import Entrenador from "./Entrenador"

export default interface entrenadorRepository{

    getAllEntrenadores() : Promise<Entrenador[]>
    getEntrenadorByName(nombre: String): Promise<Entrenador>
    capturarPokemon(entrenador : Entrenador,pokemon: Pokemon,nivel: Number): Promise<Boolean>
}