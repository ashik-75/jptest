import React from 'react';

function Topbar() {
    return (
        <div className="">
            <div className=" ml-auto flex flex-col w-[25%]">
                <span className="text-sm text-slate-500 mb-2">Department</span>
                <select
                    name=""
                    className="rounded p-2 bg-white px-2  border-1 text-sm text-slate-500 border-rose-600"
                    id=""
                >
                    <option value="medical">Medical Specialist</option>
                    <option value="dentist">Dentist</option>
                </select>
            </div>
        </div>
    );
}

export default Topbar;
