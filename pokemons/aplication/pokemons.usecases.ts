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
        return this.pokemonRepository.getPokemonByType(tipo);
    }

    async getPokemonByName(nombre: String): Promise<Pokemon> {
        return this.pokemonRepository.getPokemonByName(nombre);
    }

}