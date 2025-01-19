import React, { useState } from 'react';
import "./Linephoto.css";
import Image4 from "../dist/Image/4.jpeg";
import Image5 from "../dist/Image/5.jpeg";
import Image6 from "../dist/Image/6.jpeg";
import Image7 from "../dist/Image/7.jpeg";
import Image8 from "../dist/Image/8.jpeg";
import Image9 from "../dist/Image/9.jpeg";

// عکس های جدید برای نمایش بعد از کلیک
import NewImage1 from "../dist/Image/55.jpeg";
import NewImage2 from "../dist/Image/44.jpeg";
import NewImage3 from "../dist/Image/99.jpeg";
import NewImage4 from "../dist/Image/66.jpeg";
import NewImage5 from "../dist/Image/77.jpeg";
import NewImage6 from "../dist/Image/88.jpeg";

const Linephoto = () => {
    const [selectedInfo, setSelectedInfo] = useState({
        image: NewImage3,
        text: ""
    });

    const handleImageClick = (image, text) => {
        setSelectedInfo({ image, text });
    };

    return (
        <>
            <div className="flex justify-center items-center gap-6 p-4 mt-40 opacity-70 mb-[50px]">
                <a className="hover:brightness-150" href="#" onClick={() => handleImageClick(NewImage2, "")}>
                    <img src={Image4} alt="" className="w-[300px] h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-lg hover:scale-110" />
                </a>
                <a className="hover:brightness-150" href="#" onClick={() => handleImageClick(NewImage1, "")}>
                    <img src={Image5} alt="" className="w-[300px] h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-lg hover:scale-110" />
                </a>
                <a className="hover:brightness-150" href="#" onClick={() => handleImageClick(NewImage4, "")}>
                    <img src={Image6} alt="" className="w-[300px] h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-lg hover:scale-110" />
                </a>
                <a className="hover:brightness-150" href="#" onClick={() => handleImageClick(NewImage5, "")}>
                    <img src={Image7} alt="" className="w-[300px] h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-lg hover:scale-110" />
                </a>
                <a className="hover:brightness-150" href="#" onClick={() => handleImageClick(NewImage6, "")}>
                    <img src={Image8} alt="" className="w-[300px] h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-lg hover:scale-110" />
                </a>
                <a className="hover:brightness-150" href="#" onClick={() => handleImageClick(NewImage3, "")}>
                    <img src={Image9} alt="" className="w-[300px] h-auto transition-transform duration-300 ease-in-out rounded-lg shadow-lg hover:scale-110" />
                </a>
            </div>
            {selectedInfo && (
                <div className="info-section flex flex-col items-center mt-4">
                    <img src={selectedInfo.image} alt="Selected" className="w-[100%] h-auto rounded-lg shadow-lg" />
                    <p>{selectedInfo.text}</p>
                </div>
            )}
        </>
    );
};

export default Linephoto;
