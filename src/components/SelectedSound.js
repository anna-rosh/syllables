import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import '../css/Sound.css'

export default function SelectedSound({ sound, handleClick }) {
    const [overlayVisible, setOverlayVisivble] = useState(false);

    useEffect(() => {
        console.log('selectedSound did mount: ', sound);
    });

    const showOverlay = () => {
        setOverlayVisivble(true);
    };

    const hideOverlay = () => {
        setOverlayVisivble(false);
    };

    return (
        <div className="Sound" onMouseOver={showOverlay} onMouseLeave={hideOverlay} onClick={() => handleClick(sound)}>
            <div className="overlay" style={{visibility: overlayVisible ? "visible" : "hidden"}}>
                <X />
            </div>
            {sound}
        </div>
    );
}