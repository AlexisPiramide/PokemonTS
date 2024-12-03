import executeQuery from "../../../context/postgres.connector";
import Pokemon from "../../../pokemons/domain/Pokemon";
import Entrenador from "../../domain/Entrenador";
import entrenadorRepository from "../../domain/entrenadores.repository";

export default class entrenadorRepositoryPostgres
  implements entrenadorRepository
{
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

      rows.forEach((row) => {
        let entrenador = entrenadores.find((e) => e.id === row.id);
        if (!entrenador) {
          entrenador = {
            id: row.id,
            nombre: row.entrenador_nombre,
            pokemons: [],
          };
          entrenadores.push(entrenador);
        }

        if (row.pokemon_nombre) {
          const pokemon: Pokemon = {
            nombre: row.pokemon_nombre,
            nivel: row.nivel,
            primario: row.tipo_primario,
            secundario: row.tipo_secundario,
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

    const query = `
            SELECT e.id, e.nombre AS entrenador_nombre, ep.pokemon_nombre, ep.nivel, p.tipo_primario, p.tipo_secundario
            FROM entrenador e
            LEFT JOIN entrenador_pokemon ep ON e.id = ep.entrenador_id
            LEFT JOIN pokemon p ON ep.pokemon_nombre = p.nombre
            WHERE e.nombre = '${nombre}';
        `;

    try {
      const rows: any[] = await executeQuery(query);

      const entrenador: Entrenador = {
        id: rows[0].id,
        nombre: rows[0].entrenador_nombre,
        pokemons: [],
      };

      rows.forEach((row) => {
        if (row.pokemon_nombre) {
          const pokemon: Pokemon = {
            nombre: row.pokemon_nombre,
            nivel: row.nivel,
            primario: row.tipo_primario,
            secundario: row.tipo_secundario,
          };
          entrenador.pokemons.push(pokemon);
        }
      });

      return entrenador;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async capturarPokemon(entrenador: Entrenador,pokemon: Pokemon, nivel: Number): Promise<Boolean> {
    const query = `
    
        INSERT INTO entrenador_pokemon (entrenador_id, pokemon_nombre, nivel)
        VALUES ('${entrenador.id}', '${pokemon.nombre}', '${nivel}');
    `;

    try {
      const rows: any[] = await executeQuery(query);
        return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
