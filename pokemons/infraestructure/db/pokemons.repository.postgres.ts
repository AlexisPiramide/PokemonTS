import executeQuery from "../../../context/postgres.connector";
import Pokemon from "../../domain/Pokemon";
import pokemonRepository from "../../domain/pokemons.repository";

export default class pokemonRepositoryPostgres implements pokemonRepository{

    async getAllPokemons(): Promise<Pokemon[]> {
        const pokemons:  Pokemon [] = [];
        const query = `SELECT * FROM pokemon`
        try {
            const rows: any[] = await executeQuery(query);

            rows.map(pokemon => {
                const pokemonDB: Pokemon = {
                    nombre: pokemon.nombre,
                    primario: pokemon.tipo_primario,
                    secundario :  pokemon.tipo_secundario,
                };
                pokemons.push(pokemonDB);
            });
          

        }catch(error){
            console.error(error);
            throw error;
        }
        
        return pokemons
    }


    async getPokemonByType(tipo: String): Promise<Pokemon[]> {
        const pokemons:  Pokemon [] = [];
        const query = `SELECT * FROM pokemon where tipo_primario='${tipo}' or tipo_secundario='${tipo}'`
        try {
            const rows: any[] = await executeQuery(query);

            rows.map(pokemon => {
                const pokemonDB: Pokemon = {
                    nombre: pokemon.nombre,
                    primario: pokemon.tipo_primario,
                    secundario :  pokemon.tipo_secundario,
                };
                pokemons.push(pokemonDB);
            });
          

        }catch(error){
            console.error(error);
            throw error;
        }
        
        return pokemons
    }
    async getPokemonByName(nombre: String): Promise<Pokemon> {
  
        const query = `SELECT * FROM pokemon where nombre='${nombre}'`
        try {
            const rows: any[] = await executeQuery(query);

            const pokemonDB: Pokemon = {
                    nombre: rows[0].nombre,
                    primario: rows[0].tipo_primario,
                    secundario :  rows[0].tipo_secundario,
            };
        
            return pokemonDB
          
        }catch(error){
            console.error(error);
            throw error;
        }
 
    }

}