import React, { useState } from 'react';
import consonantsData from '../consonantsData';
import Consonant from './Consonant';

export default function Home() {
    const [consonants, setConsonants] = useState(consonantsData);

    return (
        <div className="Home">
            <div className="sound-container">
                {consonants.map((consonant) => (
                    <Consonant key={consonant.sound} consonant={consonant} />
                ))}
            </div>
        </div>
    );
};