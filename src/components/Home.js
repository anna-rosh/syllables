import React, { useState } from 'react';
import consonantsData from '../consonantsData';
import vowelsData from '../vowelsData';
import Sound from './Sound';
import SelectedSound from './SelectedSound'
import '../css/Home.css'

export default function Home() {
    const [consonants, setConsonants] = useState(consonantsData);
    const [vowels, setVowels] = useState(vowelsData);
    const [selectedConsonants, setSelectedConsonants] = useState([]);
    const [selectedVowels, setSelectedVowels] = useState([]);

    const handleClickOnConsonant = (sound) => {
        let consonantsLeft = consonants.filter(consonant => consonant !== sound);
        setConsonants(consonantsLeft);
    }

    const handleClickOnVowel = (sound) => {
        let vowelsLeft = vowels.filter(vowel => vowel !== sound);
        setVowels(vowelsLeft);
    }

    return (
        <div className="Home">
            <div className="sounds-fields">
                {/* <div className="sounds-container">
                    {selectedConsonants.map((sound) => (
                        <SelectedSound
                            key={sound.sound}
                            sound={sound}
                        />
                    ))}
                </div> */}
                {/* container with all consonants */}
                <div className="sounds-container">
                    {consonants.map((sound, i) => (
                        <Sound
                            key={i}
                            sound={sound}
                            handleClick={handleClickOnConsonant}
                        />
                    ))}
                </div>
                {/* container with all vowels */}
                <div className="sounds-container">
                    {vowels.map((sound, i) => (
                        <Sound
                            key={i}
                            sound={sound}
                            handleClick={handleClickOnVowel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};