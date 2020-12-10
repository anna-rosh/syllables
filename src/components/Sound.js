import React from 'react';

export default function Sound({ sound, handleClick }) {
    return(
        <div className="Consonant" onClick={() => handleClick(sound.sound)}>
            {sound.sound}
        </div>
    );
}