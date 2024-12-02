import Pokemon from "../domain/Pokemon";
import pokemonRepository from "../domain/pokemons.repository";

export default class pokemonUsecases {

    constructor(private pokemonRepository: pokemonRepository){}

    async getAllPokemons(): Promise<Pokemon[]> {
        try {
            return this.pokemonRepository.getAllPokemons();
        } catch (error) {
            throw error;
        }
      
    }

    async getPokemonByType(tipo: String): Promise<Pokemon[]> {
        try {
            return this.pokemonRepository.getPokemonByType(tipo);
        } catch (error) {
            throw error;
        }
    }

    async getPokemonByName(nombre: String): Promise<Pokemon> {
        try {
            return this.pokemonRepository.getPokemonByName(nombre);
        } catch (error) {
            throw error;
        }
    }
}