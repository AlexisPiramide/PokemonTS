import Pokemon from "./Pokemon";

export default interface pokemonRepository{

    getAllPokemons() : Promise<Pokemon[]>
    getPokemonByType(tipo: String): Promise<Pokemon[]>
    getPokemonByName(nombre: String): Promise<Pokemon>
    
}