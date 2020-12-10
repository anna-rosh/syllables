import React, { useState } from 'react';
import consonantsData from '../consonantsData';
import vowelsData from '../vowelsData';
import Sound from './Sound';

export default function Home() {
    const [consonants, setConsonants] = useState(consonantsData);
    const [vowels, setVowels] = useState(vowelsData);

    const handleClickOnConsonant = (sound) => {
        let consonantsLeft = consonants.filter(consonant => consonant.sound !== sound);
        setConsonants(consonantsLeft);
    }

    const handleClickOnVowel = (sound) => {
        let vowelsLeft = vowels.filter(vowel => vowel.sound !== sound);
        setVowels(vowelsLeft);
    }

    return (
        <div className="Home">
            {/* container with consonants */}
            <div className="sounds-container">
                {consonants.map((sound) => (
                    <Sound key={sound.sound} sound={sound} handleClick={handleClickOnConsonant} />
                ))}
            </div>
            {/* container with vowels */}
            <div className="sounds-container">
                {vowels.map((sound) => (
                    <Sound key={sound.sound} sound={sound} handleClick={handleClickOnVowel} />
                ))}
            </div>
        </div>
    );
};