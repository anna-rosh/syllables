import React, { useState } from 'react';
import '../css/Sound.css';

export default function Sound({ sound, handleClick }) {
    const [overlayVisible, setOverlayVisivble] = useState(false);

    const showOverlay = () => {
        setOverlayVisivble(true);
    }

    const hideOverlay = () => {
        setOverlayVisivble(false);
    }

    return(
            <div className="Sound" onClick={() => handleClick(sound)} onMouseEnter={showOverlay} onMouseLeave={hideOverlay}>
                <div className="overlay" style={{visibility: overlayVisible ? "visible" : "hidden"}}></div>
                {sound}
            </div>   
    );
}