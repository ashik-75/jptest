import React from 'react';
import Carousel from '../components/Carousel';
import DataTable from '../components/DataTable';
import Searching from '../components/Searching';
import Topbar from '../components/Topbar';

const index = () => {
    return (
        <div className="p-5">
            <Topbar />
            <div className="text-center text-rose-600 my-2 text-2xl">Doctors</div>
            <div className="bg-pink-600 my-5 h-[1px]" />

            <Carousel />

            <Searching />

            <DataTable />
        </div>
    );
};

export default index;
