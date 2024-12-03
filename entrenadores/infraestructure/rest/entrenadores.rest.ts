import express, { Request, Response } from "express";
import entrenadorRepository from "../../domain/entrenadores.repository";
import entrenadorRepositoryPostgres from "../db/entrenadores.repository.postgres";
import EntrenadorUsecases from "../../aplication/entrenadores.usecases";
import Pokemon from "../../../pokemons/domain/Pokemon";




const entrenadoresRepository: entrenadorRepository = new entrenadorRepositoryPostgres();

const entrenadorUsecases: EntrenadorUsecases = new EntrenadorUsecases(entrenadoresRepository);

const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
    try {
        const pokemons = await entrenadorUsecases.getAllEntrenadores()
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/:nombre", async (req: Request, res: Response) => {
    try {
        const nombre = req.params.nombre
        const pokemons = await entrenadorUsecases.getEntrenadorByName(nombre)
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/capturar/:entrenador", async (req: Request, res: Response) => {
    try {
        const {entrenador} = req.params
        const { nombre, primario, secundario, nivel } = req.body;
        const pokemon : Pokemon ={
            nombre: nombre,
            primario: primario,
            secundario: secundario,
            nivel: nivel,
        }
        console.log(pokemon,entrenador)
        const pokemons = await entrenadorUsecases.capturarPokemon(entrenador,pokemon)
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



export default router;