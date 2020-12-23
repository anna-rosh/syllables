import React, { useState } from 'react';
import consonantsData from "../consonantsData";
import vowelsData from "../vowelsData";
import Sound from './Sound';
import SelectedSound from './SelectedSound';

export default function SoundContainers() {
    const [consonants, setConsonants] = useState(consonantsData);
    const [vowels, setVowels] = useState(vowelsData);
    const [selectedConsonants, setSelectedConsonants] = useState([]);
    const [selectedVowels, setSelectedVowels] = useState([]);

    const handleClickOnConsonant = (sound) => {
        selectedConsonants.push(sound);
        let newSelectedConsonants = [...selectedConsonants];
        setSelectedConsonants(newSelectedConsonants);
    }

    const handleClickOnVowel = (sound) => {
        selectedVowels.push(sound);
        let newSelectedVowels = [...selectedVowels];
        setSelectedVowels(newSelectedVowels);
    }

    const handleClickOnSelectedConsonant = (sound) => {
        let selectedConsonantsLeft = selectedConsonants.filter(consonant => consonant !== sound);
        setSelectedConsonants(selectedConsonantsLeft);
        consonants.push(sound);
        setConsonants(consonants);
    }

    const handleClickOnSelectedVowel = (sound) => {
        let selectedVowelsLeft = selectedVowels.filter(vowel => vowel !== sound);
        setSelectedVowels(selectedVowelsLeft);
        vowels.push(sound);
        setVowels(vowels);
    }

    return (
        <>
            {/* container with selected consonants */}
            <div className="sounds-container">
                {selectedConsonants.map((sound, i) => (
                    <SelectedSound
                        key={i}
                        sound={sound}
                        handleClick={handleClickOnSelectedConsonant}
                    />
                ))}
            </div>
            {/* container with selected vowels */}
            <div className="sounds-container">
                {selectedVowels.map((sound, i) => (
                    <SelectedSound
                        key={i}
                        sound={sound}
                        handleClick={handleClickOnSelectedVowel}
                    />
                ))}
            </div>
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
        </>
    );
}