// frontend/src/components/Player.jsx

import React, { useEffect, useRef } from 'react';

// The component receives the currently selected 'station' as a prop
const Player = ({ station }) => {
    // useRef is used to get a direct reference to the <audio> element
    const audioRef = useRef(null);

    // This useEffect hook runs whenever the 'station' prop changes
    useEffect(() => {
        if (station && audioRef.current) {
            // If there's a new station, updates the audio source and play it
            audioRef.current.src = station.stream_url;
            audioRef.current.play().catch(error => console.error("Audio play failed:", error));
        }
    }, [station]);

    // If no station is selected, don't render anything
    if (!station) {
        return null;
    }

    // If a station IS selected, render the player
    return (
        <div className="player-container">
            <h4>Now Playing: {station.name}</h4>
            {/* The 'controls' attribute shows the default browser player UI (I might change it later, hmmm..) */}
            <audio ref={audioRef} controls autoPlay />
        </div>
    );
};

export default Player;