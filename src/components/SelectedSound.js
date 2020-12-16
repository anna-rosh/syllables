import React from 'react';
import '../css/SelectedSound.css'

export default function SelectedSound({ sound }) {
    return (
        <div className="SelectedSound">
            {sound}
        </div>
    );
}