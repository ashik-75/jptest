import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Searching() {
    return (
        <div className="flex justify-between my-4">
            <div className="space-y-2">
                <div className="flex">
                    <div className="p-3 text-2xl text-rose-600">Appoinment List</div>
                    <div className="p-3 text-2xl text-slate-600">All Request</div>
                </div>
                <div>
                    <input
                        type="date"
                        className="w-[200px] text-sm text-slate-500 rounded px-4 py-2 border border-rose-600"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center">
                    <div className="border border-slate-700 p-3 rounded-full flex justify-center items-center font-bold text-2xl text-slate-500 mr-3 w-5 h-5">
                        +
                    </div>
                    <span className="text-2xl text-slate-500">Add Appoinment</span>
                </div>
                <div className=" relative">
                    <input
                        className="px-4 py-2 rounded text-sm border"
                        placeholder="search by user name"
                        type="search"
                    />
                    <span className="absolute top-3 right-4">
                        <BsSearch />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Searching;
