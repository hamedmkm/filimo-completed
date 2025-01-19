import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Serials = () => {
    const dropdownItems = [
        'آیتم 1',
        'آیتم 2',
        'آیتم 3',
        'آیتم 4',
        'آیتم 5',
        'آیتم 6',
        'آیتم 7',
        'آیتم 8',
        'آیتم 9',
        'آیتم 4',
        'آیتم 5',
        'آیتم 6',
        'آیتم 7',
        'آیتم 8',
        'آیتم 9',
        'آیتم 10',
        'آیتم 11',
      
    ];

    const handleItemClick = (e) => {
        e.preventDefault();
        // اینجا می‌توانید عملیاتی که می‌خواهید هنگام انتخاب آیتم انجام دهید را اضافه کنید
    };

    return (
        <div className="relative inline-block text-left group">
            <a
                href="#"
                className="text-xs font-bold hover-box flex flex-row items-center justify-center ml-1 rounded-sm"
            >
                <FaAngleDown className="mt-[8px] mr-1" />
              سریال
            </a>
            <div className="absolute right-0 mt-2 w-64 bg-[#2b2b2b] border border-gray-200 rounded-md shadow-lg z-10 hidden group-hover:block">
                <div className="grid grid-cols-2">
                    {dropdownItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
                            onClick={handleItemClick}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Serials;
