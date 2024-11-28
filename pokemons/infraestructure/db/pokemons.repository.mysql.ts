import executeQuery from "../../../context/postgres.connector";
import Pokemon from "../../domain/Pokemon";
import pokemonRepository from "../../domain/pokemons.repository";

export default class pokemonRepositorySQL implements pokemonRepository{

    async getAllPokemons(): Promise<Pokemon[]> {
        const pokemons:  Pokemon [] = [];
        const query = ``
        try {
            const rows: any[] = await executeQuery(query);

            rows.map(pokemon => {
                const pokemonDB: Pokemon = {
                    nombre: pokemon.nombre,
                    primario: pokemon.primario,
                    secundario :  pokemon.secundario,
                };
                pokemons.push(pokemonDB);
            });
          

        }catch(error){
            console.error(error);
            throw error;
        }
        
        return pokemons
    }


    getPokemonByType(tipo: String): Promise<Pokemon[]> {
        throw new Error("Method not implemented.");
    }
    getPokemonByName(nombre: String): Promise<Pokemon> {
        throw new Error("Method not implemented.");
    }

}