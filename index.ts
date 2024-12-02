import express, { Request, Response } from "express";
import routerPokemons from "./pokemons/infraestructure/rest/pokemons.rest";
import routerEntrenadores from "./entrenadores/infraestructure/rest/entrenadores.rest";
const port = 8080;
const app = express();

app.use(express.json());


app.use("/api/pokemon", routerPokemons);
app.use("/api/entrenadores", routerEntrenadores);

app.listen(port, () => {
  console.log(`Application started on port ${port}`);
});