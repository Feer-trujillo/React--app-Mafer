import React, { useState, useEffect } from 'react';
import './Apod.css'; // Asegúrate de que esta ruta sea correcta y que el archivo exista

function Apod() {
    const [apod, setApod] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setApod(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApod();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="apod-container">
            <h1>{apod?.title}</h1>
            <img
                src={apod?.url}
                alt={apod?.title}
                style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
            <p>{apod?.explanation}</p>
        </div>
    );
}

export default Apod;
