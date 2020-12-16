import React, { useState } from 'react';
import '../css/Sound.css'

export default function SelectedSound({ sound }) {
    const [overlayVisible, setOverlayVisivble] = useState(false);

    const showOverlay = () => {
        setOverlayVisivble(true);
    };

    const hideOverlay = () => {
        setOverlayVisivble(false);
    };

    return (
        <div className="Sound" onMouseOver={showOverlay} onMouseLeave={hideOverlay}>
            <div className="overlay" style={{visibility: overlayVisible ? "visible" : "hidden"}}></div>
            {sound}
        </div>
    );
}