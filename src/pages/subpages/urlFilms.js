import {peliculas} from "../../src/films/arrayFilms.js"; 

export const urlPelicula = peliculas.map((pelicula) => {
    pelicula.url = pelicula.title.toLowerCase().replace(/ /g, "-").add(".astro");
    return pelicula;
});

