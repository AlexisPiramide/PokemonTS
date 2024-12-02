export default interface Pokemon{
    nombre: String,
    primario : Tipo,
    nivel?: Number,
    secundario? : Tipo,
}

export enum Tipo {
    Normal = "Normal",
    Fuego = "Fuego",
    Agua = "Agua",
    Planta = "Planta",
    Eléctrico = "Eléctrico",
    Hielo = "Hielo",
    Lucha = "Lucha",
    Veneno = "Veneno",
    Tierra = "Tierra",
    Volador = "Volador",
    Psíquico = "Psíquico",
    Bicho = "Bicho",
    Roca = "Roca",
    Fantasma = "Fantasma",
    Dragón = "Dragón",
    Siniestro = "Siniestro",
    Acero = "Acero",
    Hada = "Hada",
}