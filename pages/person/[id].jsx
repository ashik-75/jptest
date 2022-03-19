import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import allData from '../../data/allData';

const person = () => {
    const router = useRouter();

    const { id } = router.query;
    const getData = allData.find((dt) => dt.id === Number(id));

    return (
        <div>
            <div> person - {id}</div>
            <div>person name - {getData?.name}</div>
            <div>person country - {getData?.country}</div>
            <button type="button">
                <Link href="/">back</Link>
            </button>
        </div>
    );
};

export default person;
