import React from 'react';
import SoundContainers from './SoundContainers';
import '../css/Home.css'

export default function Home() {

    return (
        <div className="Home">
            <div className="sounds-fields">
                <SoundContainers />
            </div>
        </div>
    );
};