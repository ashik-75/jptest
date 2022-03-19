import Link from 'next/link';
import React from 'react';

const data = [
    {
        id: 1,
        name: 'alex',
    },
    {
        id: 2,
        name: 'alex',
    },
    {
        id: 3,
        name: 'alex',
    },
    {
        id: 4,
        name: 'alex',
    },
    {
        id: 5,
        name: 'alex',
    },
];

const play = () => {
    return (
        <div>
            {data.map((dt) => (
                <div>
                    <Link href={`/person/${dt.id}`} key={dt.id}>
                        {dt.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default play;
