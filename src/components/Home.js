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
        // delete selected consonants from the state to only render the consonants
        // that were not selected
        let consonantsLeft = consonants.filter(consonant => consonant !== sound);
        setConsonants(consonantsLeft);
        // collect the selected consonants to the new arr in the state to render them
        selectedConsonants.push(sound);
        setSelectedConsonants(selectedConsonants);
    }

    // const handleClickOnVowel = (sound) => {
    //     let vowelsLeft = vowels.filter(vowel => vowel !== sound);
    //     setVowels(vowelsLeft);
    //     selectedVowels.push(sound);
    //     setSelectedVowels(selectedVowels);
    // }

    // const handleClickOnConsonant = (sound) => {
    //     console.log('sound inside the function: ', sound);
    //     selectedConsonants.push(sound);
    //     console.log("selected consonants: ", selectedConsonants);
    //     setSelectedConsonants(selectedConsonants);
    //     console.log("selected consonants after setting: ", selectedConsonants);
    // }

    const handleClickOnVowel = (sound) => {
        selectedVowels.push(sound);
        setSelectedVowels(selectedVowels);
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
        <div className="Home">
            <div className="sounds-fields">
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
            </div>
        </div>
    );
};