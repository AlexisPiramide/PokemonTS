CREATE TABLE tipo (
    nombre VARCHAR(50) PRIMARY KEY  
);
CREATE TABLE pokemon (         
    nombre VARCHAR(100) PRIMARY KEY,      
    tipo_primario VARCHAR(50) NOT NULL,
    tipo_secundario VARCHAR(50),        
    FOREIGN KEY (tipo_primario) REFERENCES tipo (nombre),
    FOREIGN KEY (tipo_secundario) REFERENCES tipo (nombre)
);

CREATE TABLE entrenador (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE entrenador_pokemon (
    id SERIAL PRIMARY KEY,
    entrenador_id INT,
    pokemon_nombre VARCHAR(100),
    nivel INT NOT NULL,
    FOREIGN KEY (entrenador_id) REFERENCES entrenador(id),
    FOREIGN KEY (pokemon_nombre) REFERENCES pokemon(nombre)
);

INSERT INTO tipo (nombre) VALUES
('Normal'), ('Fuego'), ('Agua'), ('Planta'), ('Eléctrico'), ('Hielo'),
('Lucha'), ('Veneno'), ('Tierra'), ('Volador'), ('Psíquico'), ('Bicho'),
('Roca'), ('Fantasma'), ('Dragón'), ('Siniestro'), ('Acero'), ('Hada');

INSERT INTO pokemon (nombre, tipo_primario, tipo_secundario) VALUES
('Bulbasaur', 'Planta', 'Veneno'),
('Ivysaur', 'Planta', 'Veneno'),
('Venusaur', 'Planta', 'Veneno'),
('Charmander', 'Fuego', NULL),
('Charmeleon', 'Fuego', NULL),
('Charizard', 'Fuego', 'Volador'),
('Squirtle', 'Agua', NULL),
('Wartortle', 'Agua', NULL),
('Blastoise', 'Agua', NULL),
('Caterpie', 'Bicho', NULL),
('Metapod', 'Bicho', NULL),
('Butterfree', 'Bicho', 'Volador'),
('Weedle', 'Bicho', 'Veneno'),
('Kakuna', 'Bicho', 'Veneno'),
('Beedrill', 'Bicho', 'Veneno'),
('Pidgey', 'Normal', 'Volador'),
('Pidgeotto', 'Normal', 'Volador'),
('Pidgeot', 'Normal', 'Volador'),
('Rattata', 'Normal', NULL),
('Raticate', 'Normal', NULL),
('Spearow', 'Normal', 'Volador'),
('Fearow', 'Normal', 'Volador'),
('Ekans', 'Veneno', NULL),
('Arbok', 'Veneno', NULL),
('Pikachu', 'Eléctrico', NULL),
('Raichu', 'Eléctrico', NULL),
('Sandshrew', 'Tierra', NULL),
('Sandslash', 'Tierra', NULL),
('Nidoran♀', 'Veneno', NULL),
('Nidorina', 'Veneno', NULL),
('Nidoqueen', 'Veneno', 'Tierra'),
('Nidoran♂', 'Veneno', NULL),
('Nidorino', 'Veneno', NULL),
('Nidoking', 'Veneno', 'Tierra'),
('Clefairy', 'Hada', NULL),
('Clefable', 'Hada', NULL),
('Vulpix', 'Fuego', NULL),
('Ninetales', 'Fuego', NULL),
('Jigglypuff', 'Normal', 'Hada'),
('Wigglytuff', 'Normal', 'Hada'),
('Zubat', 'Veneno', 'Volador'),
('Golbat', 'Veneno', 'Volador'),
('Oddish', 'Planta', 'Veneno'),
('Gloom', 'Planta', 'Veneno'),
('Vileplume', 'Planta', 'Veneno'),
('Paras', 'Bicho', 'Planta'),
('Parasect', 'Bicho', 'Planta'),
('Venonat', 'Bicho', 'Veneno'),
('Venomoth', 'Bicho', 'Veneno'),
('Diglett', 'Tierra', NULL),
('Dugtrio', 'Tierra', NULL),
('Meowth', 'Normal', NULL),
('Persian', 'Normal', NULL),
('Psyduck', 'Agua', NULL),
('Golduck', 'Agua', NULL),
('Machop', 'Lucha', NULL),
('Machoke', 'Lucha', NULL),
('Machamp', 'Lucha', NULL),
('Geodude', 'Roca', 'Tierra'),
('Graveler', 'Roca', 'Tierra'),
('Golem', 'Roca', 'Tierra'),
('Onix', 'Roca', 'Tierra'),
('Drowzee', 'Psíquico', NULL),
('Hypno', 'Psíquico', NULL),
('Krabby', 'Agua', NULL),
('Kingler', 'Agua', NULL),
('Exeggcute', 'Planta', 'Psíquico'),
('Exeggutor', 'Planta', 'Psíquico'),
('Cubone', 'Tierra', NULL),
('Marowak', 'Tierra', NULL),
('Lickitung', 'Normal', NULL),
('Lickilicky', 'Normal', NULL),
('Rhyhorn', 'Roca', 'Tierra'),
('Rhydon', 'Roca', 'Tierra'),
('Chansey', 'Normal', NULL),
('Tangela', 'Planta', NULL),
('Kangaskhan', 'Normal', NULL),
('Horsea', 'Agua', NULL),
('Seadra', 'Agua', NULL),
('Staryu', 'Agua', NULL),
('Starmie', 'Agua', 'Psíquico'),
('Mr. Mime', 'Psíquico', 'Hada'),
('Scyther', 'Bicho', 'Volador'),
('Electabuzz', 'Eléctrico', NULL),
('Magmar', 'Fuego', NULL),
('Pinsir', 'Bicho', NULL),
('Tauros', 'Normal', NULL),
('Magikarp', 'Agua', NULL),
('Gyarados', 'Agua', 'Volador'),
('Lapras', 'Agua', 'Hielo'),
('Ditto', 'Normal', NULL),
('Eevee', 'Normal', NULL),
('Vaporeon', 'Agua', NULL),
('Jolteon', 'Eléctrico', NULL),
('Flareon', 'Fuego', NULL),
('Espeon', 'Psíquico', NULL),
('Umbreon', 'Siniestro', NULL),
('Leafeon', 'Planta', NULL),
('Glaceon', 'Hielo', NULL),
('Sylveon', 'Hada', NULL),
('Tyranitar', 'Roca', 'Siniestro'),
('Mew', 'Psíquico', NULL);

INSERT INTO entrenador (id, nombre) VALUES
(1, 'Ash Ketchum'),
(2, 'Misty Waterflower'),
(3, 'Brock Harrison'),
(4, 'Gary Oak');
 INSERT INTO entrenador_pokemon (entrenador_id, pokemon_nombre, nivel) VALUES
(1, 'Pikachu', 10),   -- Ash Ketchum con Pikachu
(1, 'Bulbasaur', 5),  -- Ash Ketchum con Bulbasaur
(2, 'Squirtle', 8),   -- Misty con Squirtle
(2, 'Starmie', 16),   -- Misty con Starmie
(3, 'Geodude', 12),   -- Brock con Geodude
(3, 'Onix', 25),      -- Brock con Onix
(4, 'Charmander', 7), -- Gary con Charmander
(4, 'Pidgey', 5);     -- Gary con Pidgey
