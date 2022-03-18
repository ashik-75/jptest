import React, { useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const play = () => {
    const ref = useRef();

    const handleClick = (direction) => {
        const distance = ref.current.getBoundingClientRect().x - 8;

        if (direction === 'left') {
            ref.current.style.transform = `translateX(${distance + 310}px)`;
        } else {
            ref.current.style.transform = `translateX(${-310 + distance}px)`;
        }
    };

    const seeRect = () => {
        const distance = ref.current.getBoundingClientRect().x - 8;
        console.log({ distance, data: ref.current.getBoundingClientRect() });
    };
    return (
        <div>
            <div className="slider-container relative overflow-hidden">
                <div
                    ref={ref}
                    style={{ transition: '1s ease' }}
                    className="slider-list flex space-x-[10px]"
                >
                    {[1, 2, 3, 4, 5, 6, 7].map((dt) => (
                        <div key={dt} className="slide min-w-[300px] h-[200px]">
                            <img
                                className="w-[100%] object-center object-cover h-[100%] rounded"
                                src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                <BsChevronLeft
                    onClick={() => handleClick('left')}
                    className="font-bold text-white absolute cursor-pointer top-[40%] left-5 text-3xl"
                />
                <BsChevronRight
                    onClick={() => handleClick('right')}
                    className="font-bold cursor-pointer hover:scale-150 hover:font-extrabold text-white text-3xl absolute right-5 top-[40%]"
                />
            </div>

            <button type="button" onClick={seeRect}>
                rect
            </button>
        </div>
    );
};

export default play;
