
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


    async capturarPokemon(entrenador: String,pokemon: Pokemon): Promise<Entrenador> {
        try {
            const entrenadorDB= await this.entrenadorRepository.getEntrenadorByName(entrenador);
            await this.entrenadorRepository.capturarPokemon(entrenadorDB,pokemon,pokemon.nivel || 5);
            return this.entrenadorRepository.getEntrenadorByName(entrenador);
        } catch (error) {
            throw error;
        }
    }

   
}