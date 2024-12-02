import express, { Request, Response } from "express";
import entrenadorRepository from "../../domain/entrenadores.repository";
import entrenadorRepositoryPostgres from "../db/entrenadores.repository.postgres";
import EntrenadorUsecases from "../../aplication/entrenadores.usecases";




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




export default router;