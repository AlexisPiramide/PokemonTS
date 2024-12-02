import executeQuery from "../../../context/postgres.connector";
import Pokemon from "../../../pokemons/domain/Pokemon";
import Entrenador from "../../domain/Entrenador";
import entrenadorRepository from "../../domain/entrenadores.repository";

export default class entrenadorRepositoryPostgres implements entrenadorRepository{
    
    async getAllEntrenadores(): Promise<Entrenador[]> {
        const entrenadores: Entrenador[] = [];
        const query = `
            SELECT e.id, e.nombre AS entrenador_nombre, ep.pokemon_nombre, ep.nivel, p.tipo_primario, p.tipo_secundario
            FROM entrenador e
            LEFT JOIN entrenador_pokemon ep ON e.id = ep.entrenador_id
            LEFT JOIN pokemon p ON ep.pokemon_nombre = p.nombre;
        `;
    
        try {
            const rows: any[] = await executeQuery(query);
    
            rows.forEach(row => {
                let entrenador = entrenadores.find(e => e.id === row.id);
                if (!entrenador) {
                    entrenador = {
                        id: row.id,
                        nombre: row.entrenador_nombre,
                        pokemons: []
                    };
                    entrenadores.push(entrenador);
                }
    
                if (row.pokemon_nombre) {
                    const pokemon: Pokemon = {
                        nombre: row.pokemon_nombre,
                        nivel: row.nivel,
                        primario: row.tipo_primario,
                        secundario: row.tipo_secundario
                    };
                    entrenador.pokemons.push(pokemon);
                }
            });
    
        } catch (error) {
            console.error(error);
            throw error;
        }
    
        return entrenadores;
    }
    
    
    async getEntrenadorByName(nombre: String): Promise<Entrenador> {
        throw new Error("Method not implemented.");
    }

    async capturarPokemon(entrenador: Entrenador, pokemon: Pokemon): Promise<Entrenador> {
        throw new Error("Method not implemented.");
    }

}