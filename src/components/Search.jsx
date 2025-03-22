// components/Search.jsx
import React, { useState } from 'react';

export default function Search({ peliculas }) {
    const [consulta, setConsulta] = useState('');
    const resultados = buscarPeliculas(consulta, peliculas);

    function buscarPeliculas(consulta, peliculas) {
        if (!consulta) {
            return []; // Devuelve un array vacío si no hay consulta
        }

        const consultaMinusculas = consulta.toLowerCase();
        return peliculas.filter((pelicula) => {
            if (typeof pelicula.title === 'string') {
                    return pelicula.title.toLowerCase().includes(consultaMinusculas);
            }
            return false;
        });
    }

    return (
        <div>
            <input
                type="search"
                placeholder="Buscar"
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
                class="bg-neutral-200 rounded-2xl px-2 py-1 w-[300px] h-10 ml-60"
            />

            {consulta && (
                <div 
                style={{ maxHeight: '300px', overflowX: 'auto', position: 'fixed' }}
                className='block bg-neutral-200 rounded-2xl px-2 py-1 w-[300px] ml-60 fixed'
                >
                    {resultados.map((pelicula) => (
                        <div key={pelicula.title} class="block items-center align-middle space-x-4 border-2 border-black rounded-xl p-3 mb-6">
                            <img src={pelicula.image} alt={pelicula.title} class="w-30"/>
                            <h2 class="font-bold text-2xl">{pelicula.title}</h2>
                            <p>{pelicula.category}</p>
                        </div>
                    ))}
                </div>
            )} 
        </div>
    );
}