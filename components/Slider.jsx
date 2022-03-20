/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Slider({ personList }) {
    const [slider, setSlider] = useState(0);
    const [viewPortWidth, setViewPortWidth] = useState(0);

    useEffect(() => {
        const width = Math.floor(window.innerWidth / 320);
        setViewPortWidth(width);
    }, []);

    const handleSlider = (way) => {
        way === 'right'
            ? setSlider(personList.length - 4 - slider + (4 - viewPortWidth) > 0 ? slider + 1 : 0)
            : setSlider(slider > 0 ? slider - 1 : 0);
    };
    return (
        <div className="relative">
            <div className="container overflow-hidden ">
                <div
                    style={{
                        transform: `translateX(-${slider * 310}px)`,
                        transition: 'all 1s ease',
                    }}
                    className="flex gap-[10px]"
                >
                    {personList.map((person) => (
                        <div
                            style={{ boxSizing: 'border-box' }}
                            className="slider bg-green-600 min-w-[300px] p-5"
                        >
                            {person.name}
                        </div>
                    ))}
                </div>
            </div>

            <BsChevronLeft
                onClick={() => handleSlider('left')}
                className=" absolute top-2 left-2 font-extrabold text-4xl text-white "
            />
            <BsChevronRight
                onClick={() => handleSlider('right')}
                className=" absolute top-2 right-2 font-extrabold text-4xl text-white "
            />
        </div>
    );
}

export default Slider;
