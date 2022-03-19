import React, { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Item() {
    return (
        <div className="flex shadow-lg p-2 rounded min-w-[200px] gap-2">
            <div className="w-[90px] h-[100%]">
                <img className="w-[100%] h-[100%] rounded  " src="/p-2.jpeg" alt="" />
            </div>
            <div className="space-y-1">
                <div className="text-sm  text-slate-600">Dr: Kabir Ahsan</div>
                <div className="text-sm text-slate-600">Rabbanki Jindabad</div>
                <div className="text-sm text-rose-600 whitespace-nowrap">(Medicine Specialist)</div>
                <div className="text-sm text-slate-600">Id: 823873B</div>
            </div>
        </div>
    );
}

function Carousel() {
    const ref = useRef();
    const [currentValue, setCurrentValue] = useState(0);
    const [slide, setSlide] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left' && slide >= 1) {
            setSlide((val) => val - 1);
            setCurrentValue((value) => value + 225);
        }
        if (direction === 'right' && slide < 2) {
            setSlide((val) => val + 1);
            setCurrentValue((value) => value - 225);
        }

        if (slide === 2) {
            setCurrentValue(0);
        }
    };

    console.log({ slide });

    return (
        <div className="overflow-hidden relative">
            <div
                style={{ transition: 'all 1s ease', transform: `translateX(${currentValue}px)` }}
                ref={ref}
                className="flex gap-[10px]"
            >
                {[1, 2, 3, 4, 5, 6, 7].map((dt) => (
                    <Item key={dt} />
                ))}
            </div>
            <BsChevronLeft
                onClick={() => handleClick('left')}
                className="font-bold text-slate-800 absolute cursor-pointer top-[40%] left-5 text-3xl"
            />
            <BsChevronRight
                onClick={() => handleClick('right')}
                className="font-bold cursor-pointer hover:scale-150 hover:font-extrabold text-slate-800 text-3xl absolute right-5 top-[40%]"
            />
        </div>
    );
}

export default Carousel;
