import React from 'react';

function Person() {
    return (
        <div className="border-2 shadow p-3 border-rose-600 rounded">
            <div className="flex">
                <div>
                    <img className="w-20 h-20 rounded " src="/p-2.jpeg" alt="" />
                </div>
                <div>
                    <div className="text-sm text-slate-600">Dr: Kabir Ahsan</div>
                    <div className="text-sm text-slate-600">Rabbanki Jindabad</div>
                    <div className="text-sm text-rose-600">(Medicine Specialist)</div>
                    <div className="text-sm text-[14px] text-slate-400">Id: 823873B</div>
                </div>
            </div>
        </div>
    );
}

export default Person;
