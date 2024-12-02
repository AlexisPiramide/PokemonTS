import express, { Request, Response } from "express";

import PokemonUsecases from "../../aplication/pokemons.usecases";
import PokemonRepository from "../../domain/pokemons.repository";
import PokemonRepositorySQL from "../db/pokemons.repository.postgres";


const pokemonRepository: PokemonRepository = new PokemonRepositorySQL();

const pokemonUsecases: PokemonUsecases = new PokemonUsecases(pokemonRepository);

const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
    try {
        const pokemons = await pokemonUsecases.getAllPokemons()
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

});


router.post("/tipo", async (req: Request, res: Response) => {
    try {
        const { tipo } = req.body;
        if (!tipo) {
            return res.status(400).json({ error: "No has seleccionado un tipo corretamente" });
        }
        const pokemons = await pokemonUsecases.getPokemonByType(tipo);
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/nombre", async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body; 
        if (!nombre) {
            return res.status(400).json({ error: "No has seleccionado un nombre corretamente" });
        }
        const pokemons = await pokemonUsecases.getPokemonByName(nombre);
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router;