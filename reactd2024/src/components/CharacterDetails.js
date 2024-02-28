import React from 'react';

const CharacterDetails = ({charDetails}) => {
    const {name, status, species, gender} = charDetails;
    return (
        <div>
            <div>name-{name}</div>
            <div>status-{status}</div>
            <div>species-{species}</div>
            <div>gender-{gender}</div>
        </div>
    );
};

export {CharacterDetails};