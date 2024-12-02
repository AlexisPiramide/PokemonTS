
import Pokemon from "../../pokemons/domain/Pokemon";
import Entrenador from "../domain/Entrenador";
import entrenadorRepository from "../domain/entrenadores.repository";

export default class entrenadorUsecases {

    constructor(private entrenadorRepository: entrenadorRepository){}

    async getAllEntrenadores(): Promise<Entrenador[]> {
        try {
            return this.entrenadorRepository.getAllEntrenadores();
        } catch (error) {
            throw error;
        }
      
    }

    async getEntrenadorByName(nombre: String): Promise<Entrenador> {
        try {
            return this.entrenadorRepository.getEntrenadorByName(nombre);
        } catch (error) {
            throw error;
        }
    }


    async capturarPokemon(entrenador: Entrenador,pokemon: Pokemon): Promise<Entrenador> {
        try {
            return this.entrenadorRepository.capturarPokemon(entrenador,pokemon);
        } catch (error) {
            throw error;
        }
    }

   
}