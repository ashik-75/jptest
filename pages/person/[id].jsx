import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const person = () => {
    const router = useRouter();

    const { id } = router.query;
    return (
        <div>
            <div>single person - {id}</div>
            <button type="button">
                <Link href="/play">back</Link>
            </button>
        </div>
    );
};

export default person;
