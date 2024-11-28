import express, { Request, Response } from "express";

import PokemonUsecases from "../../aplication/pokemons.usecases";
import PokemonRepository from "../../domain/pokemons.repository";
import PokemonRepositorySQL from "../db/pokemons.repository.mysql";


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