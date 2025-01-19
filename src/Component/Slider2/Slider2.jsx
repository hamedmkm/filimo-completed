import React, { useState, useEffect, useRef } from 'react';
import { IoPersonCircleOutline, IoArrowForward, IoArrowBack } from "react-icons/io5";

// محتوای هر اسلاید
const slidesData = [
    { h1: 'سلام خیلی محشره هروقت فیلیمورو میبینم لذت میبرم', h2: 'حامد' },
    { h1: 'فیلیموی جدید خیلی جالب بود، حتماً ببینید!', h2: 'متین' },
    { h1: 'محتوای جالب و سرگرم‌کننده‌ای دارد.', h2: 'احمد' },
    { h1: 'همیشه با فیلیمو لذت می‌برم!', h2: 'اصفر' },
    { h1: 'فیلیموی محبوب من، به شدت توصیه می‌شود.', h2: 'کفتر' },
    { h1: 'تجربه‌ای بی‌نظیر و سرگرم‌کننده.', h2: 'سیما' } // آیتم ششم اضافه شد
];

const Slider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    const slideCount = slidesData.length; // تعداد کل اسلایدها
    const slideWidth = 100 / slideCount; // درصد عرض هر اسلاید

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slideCount);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + slideCount) % slideCount);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000); // تغییر هر 5 ثانیه

        return () => clearInterval(interval);
    }, [slideCount]);

    useEffect(() => {
        if (slidesRef.current) {
            slidesRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }
    }, [currentIndex, slideWidth]);

    return (
        <div className="relative   overflow-hidden w-full h-[200px]">
            <button 
                className="absolute top-6 left-11 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
                onClick={goToPreviousSlide}
            >
                <IoArrowBack size={24} />
            </button>
            <button 
                className="absolute top-6  right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
                onClick={goToNextSlide}
            >
                <IoArrowForward size={24} />
            </button>
            <div 
                className="flex transition-transform duration-500 pt-12  ease-in-out"
                ref={slidesRef}
            >
                {slidesData.map((slide, index) => (
                    <div className="flex-none pl-10 h-[140px] w-[40%] box-border" key={index}>
                        <div className="flex flex-col justify-between h-full p-4 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-black border border-[#666565] rounded-lg relative">
                            <h2 className="text-white opacity-75 text-right flex items-center justify-end absolute top-2 left-2">
                                <span className="mr-2">{slide.h2}</span>
                                <IoPersonCircleOutline className='text-xl' />
                            </h2>
                            <h1 className="text-white text-sm mt-12">{slide.h1}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider2;
