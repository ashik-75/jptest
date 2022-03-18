import React from 'react';
import Person from './Person';

function DataTable() {
    return (
        <div>
            <div className="overflow-auto">
                <table className="w-full" cellSpacing={0}>
                    <thead className="bg-rose-600 text-[17px] text-white rounded shadow-lg mb-5">
                        <tr className="rounded">
                            <th className="p-3 whitespace-nowrap text-left tracking-wide">SI No</th>
                            <th className="p-3 w-[25%] whitespace-nowrap text-left tracking-wide">
                                Patient Name
                            </th>
                            <th className="p-3 whitespace-nowrap text-left tracking-wide">
                                Sex & Age
                            </th>
                            <th className="p-3 whitespace-nowrap text-left tracking-wide">
                                Appoinment Date
                            </th>
                            <th className="p-3 w-[25%] whitespace-nowrap text-left tracking-wide">
                                Appoinment With Doctor
                            </th>
                            <th className="p-3 whitespace-nowrap text-left tracking-wide">
                                Status
                            </th>
                        </tr>
                    </thead>
                    {/* <br /> */}
                    <tbody className="divide-y-2">
                        {[1, 2, 3, 4, 5].map((dt) => (
                            <tr key={dt} className="p-4  shadow-lg">
                                <td className="p-3 whitespace-nowrap tracking-wide">{dt}</td>

                                <td className="p-3 whitespace-nowrap tracking-wide">
                                    <Person />
                                </td>

                                <td className="p-3 whitespace-nowrap tracking-wide text-slate-600">
                                    <span className="block mb-2">Female</span>
                                    <span>18</span>
                                </td>
                                <td className="p-3 whitespace-nowrap tracking-wide text-sm text-slate-500">
                                    01/01/2022
                                </td>
                                <td className="p-3 whitespace-nowrap tracking-wide">
                                    <Person />
                                </td>
                                <td className="p-3 whitespace-nowrap tracking-wide space-x-3">
                                    <span className="text-[10px]">Running</span>
                                    <button
                                        style={{ border: '1px solid red' }}
                                        className="py-2 outline-none bg-white  px-4 cursor-pointer  text-rose-600 border-none text-sm rounded"
                                        type="button"
                                    >
                                        view Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataTable;
