import React, { useState } from 'react';
import { Check } from 'react-feather';
import '../css/Sound.css';

export default function Sound({ sound, handleClick }) {
    const [overlayVisible, setOverlayVisivble] = useState(false);
    const [soundIsVisible, setSoundIsVisible] = useState(true);

    const showOverlay = () => {
        setOverlayVisivble(true);
    }

    const hideOverlay = () => {
        setOverlayVisivble(false);
    }

    const hideSound = () => {
        handleClick(sound);
        setSoundIsVisible(false);
    }

    return(
            <div className="Sound" onClick={hideSound} onMouseEnter={showOverlay} onMouseLeave={hideOverlay} style={{visibility: soundIsVisible ? "visible" : "hidden"}}>
                <div className="overlay" style={{visibility: overlayVisible ? "visible" : "hidden"}}>
                    <Check />
                </div>
                {sound}
            </div>   
    );
}