/* eslint-disable no-unused-expressions */
import React from 'react';
import Slider from '../components/Slider';

const personList = [
    {
        id: 1,
        name: 'Alex Hales',
        country: 'Usa',
    },
    {
        id: 2,
        name: 'James',
        country: 'Usa',
    },
    {
        id: 3,
        name: 'Sarah',
        country: 'Usa',
    },
    {
        id: 4,
        name: 'Tim Berns ley',
        country: 'Usa',
    },
    {
        id: 5,
        name: 'Alex Hales',
        country: 'Usa',
    },
    {
        id: 6,
        name: 'James',
        country: 'Usa',
    },
    {
        id: 7,
        name: 'Sarah',
        country: 'Usa',
    },
    {
        id: 8,
        name: 'Tim Berns ley',
        country: 'Usa',
    },
];

const play = () => {
    return (
        <div>
            <Slider personList={personList} />
        </div>
    );
};

export default play;
