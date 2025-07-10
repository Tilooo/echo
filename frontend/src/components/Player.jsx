// frontend/src/components/Player.jsx

import React, { useEffect, useRef } from 'react';

const Player = ({ station }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (station && audioRef.current) {
            audioRef.current.src = station.stream_url;
            audioRef.current.play().catch(error => console.error("Audio play failed:", error));
        }
    }, [station]);

    if (!station) {
        return null;
    }

    const playerStyle = {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: '#111827', // A dark gray color
        color: 'white',
        padding: '1rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={playerStyle}>
            <h4>Now Playing: {station.name}</h4>
            <audio ref={audioRef} controls autoPlay style={{ marginLeft: '20px' }} />
        </div>
    );
};

export default Player;