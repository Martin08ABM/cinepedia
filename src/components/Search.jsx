// components/Search.jsx
import React, { useState } from 'react';

export default function Search({ peliculas }) {
    const [consulta, setConsulta] = useState('');
    const resultados = buscarPeliculas(consulta, peliculas);

    function buscarPeliculas(consulta, peliculas) {
        if (!consulta) return [];
        const consultaMinusculas = consulta.toLowerCase();
        return peliculas.filter((pelicula) =>
            typeof pelicula.title === 'string' &&
            pelicula.title.toLowerCase().includes(consultaMinusculas)
        );
    }

    return (
        <div className="relative">
            <input
                type="search"
                placeholder="Buscar"
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
                className="bg-neutral-800 text-white placeholder-gray-400 rounded-2xl px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {consulta && (
                <div 
                    className="absolute z-50 mt-2 bg-neutral-900 text-white rounded-xl w-72 shadow-lg overflow-y-auto max-h-80"
                >
                    {resultados.map((pelicula) => (
                        <a
                            key={pelicula.title}
                            href={`/Films-pages/${pelicula.id}`}
                            className="flex items-center gap-3 border-b border-neutral-700 px-4 py-2 hover:bg-neutral-800 transition-colors duration-200"
                        >
                            <img
                                src={pelicula.image}
                                alt={pelicula.title}
                                className="w-12 h-16 object-cover rounded-md"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{pelicula.title}</h2>
                                <p className="text-sm text-neutral-400">{pelicula.category}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )} 
        </div>
    );
}