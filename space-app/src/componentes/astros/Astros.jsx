import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Importa CircularProgress
import './Astros.css'; // Asumiendo que estás importando un archivo CSS

function AstroCard({ name, craft }) {
    return (
        <div className='card'>
            <h3 className='astro-name'>{name}</h3>
            <p className='astro-craft'>{craft}</p>
        </div>
    );
}

function Astros() {
    const API_URL = "http://api.open-notify.org/astros.json";
    const [astros, setAstros] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setAstros(data.people);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    // Maneja el caso cuando `astros` es null
    if (astros === null) {
        return (
            <div className='loading-container'>
                <CircularProgress style={{ color: "#ffffff" }} />
            </div>
        );
    }

    return (
        <div className='astros-container'>
            {astros.map((astro) => (
                <AstroCard key={astro.name} {...astro} />
            ))}
        </div>
    );
}

export default Astros;
