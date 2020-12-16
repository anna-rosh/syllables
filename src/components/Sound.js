import React from 'react';
import '../css/Sound.css';

export default function Sound({ sound, handleClick }) {
    return(
        <div className="Sound" onClick={() => handleClick(sound)}>
            {sound}
        </div>
    );
}