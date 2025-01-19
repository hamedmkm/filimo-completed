import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Imagem4 from "./Image/imagem4.jpeg"; 
import { MdOutlineBookmarkAdded } from "react-icons/md";
import Imagem2 from "./Image/imagem4-2.jpeg";  
import Imagem1 from "./Image/imagem4-3.jpeg";  

const Midle4 = () => {
    return ( 
        <> 
        <div>
            <div className="text-white pt-10 flex  flex-col items-center">
                <h1 className="text-center text-lg font-bold mb-4">سینما آنلاین فیلیمو</h1>
                <div className="flex justify-center items-center w-full">
                    <div className="flex justify-between w-full max-w-screen-xl px-4">
                        <h2 className="flex items-center mx-2">خرید یک بلیت برای تماشا همراه با همه خانواده <IoIosCheckmarkCircleOutline className="bg-gree-full ml-2"/></h2>
                        <h2 className="flex items-center mx-2">۸ ساعت زمان برای مشاهده فیلم در هر کجا <IoIosCheckmarkCircleOutline className="bg-gree-full ml-2"/></h2>
                        <h2 className="flex items-center mx-2">فیلم‌های روز سینمای ایران <IoIosCheckmarkCircleOutline className="bg-gree-full ml-2"/></h2>
                    </div>
                </div>

            </div>

            <div className="w-full mx-auto mt-10 mb-10 p-4 flex flex-col items-center">
    <div className="flex justify-between w-full">
        <div id="2" className="w-[40%] p-4 border border-gray-300 rounded-lg shadow-lg">
            <div className="flex items-start justify-between">
                <label className="text-white text-xs  flex items-center mb-2">
                    اکران آنلاین
                    <MdOutlineBookmarkAdded className="ml-1" />
                </label>
                <div className="flex flex-col ml-auto items-center">
                    <div className="flex flex-col p-5 items-center text-right ">
                        <a href="#" className="text-lg text-white mb-7">بی بدن</a>
                        <h1 className="text-sm text-white font-semibold mb-2">کارگردان: مهدی علی‌میرزایی</h1>
                        <div className="flex p-3 space-x-2 mb-8">
                            <h1 className="bg-gray-700 rounded-3xl text-white px-2 py-1">جنایی</h1>
                            <h1 className="bg-gray-700 text-white px-3 py-1 rounded-3xl">درام</h1>
                        </div>
                        <button className="border border-gray-300 hover-box rounded-xl text-white py-2 px-4">
                            خرید بلیت
                        </button>
                    </div>
                </div>
                <img src={Imagem4} alt="" className="w-[33%] h-auto rounded" />
            </div>
        </div>
        <div id="1" className="w-[40%] p-4 border border-gray-300 rounded-lg shadow-lg">
            <div className="flex items-start justify-between">
                <label className="text-white text-xs flex items-center mb-2">
                    اکران آنلاین
                    <MdOutlineBookmarkAdded className="ml-1" />
                </label>
                <div className="flex ml-auto p-5 flex-col items-center">
                    <div className="flex flex-col items-center text-right">
                        <a href="#" className="text-lg text-white mb-7">بی بدن</a>
                        <h1 className="text-sm text-white font-semibold mb-2">کارگردان: مهدی علی‌میرزایی</h1>
                        <div className="flex p-3 space-x-2 mb-8">
                            <h1 className="bg-gray-700 rounded-3xl text-white px-2 py-1">جنایی</h1>
                            <h1 className="bg-gray-700 text-white px-3 py-1 rounded-3xl">درام</h1>
                        </div>
                        <button className="border border-gray-300 hover-box rounded-xl text-white py-2 px-4">
                            خرید بلیت
                        </button>
                    </div>
                </div>
                <img src={Imagem2} alt="" className="w-[33%] h-auto rounded" />
            </div>
        </div>
    </div>
 
    <div id="3" className="w-[40%] p-4 border border-gray-300 rounded-lg shadow-lg mt-10">
        <div className="flex items-start justify-between">
            <label className="text-white text-xs flex items-center mb-2">
                اکران آنلاین
                <MdOutlineBookmarkAdded className="ml-1" />
            </label>
            <div className="flex ml-auto p-5 flex-col items-center">
                <div className="flex flex-col items-center text-right">
                    <a href="#" className="text-lg text-white mb-7">بی بدن</a>
                    <h1 className="text-sm text-white font-semibold mb-2">کارگردان: مهدی علی‌میرزایی</h1>
                    <div className="flex p-3 space-x-2 mb-8">
                        <h1 className="bg-gray-700 rounded-3xl text-white px-2 py-1">جنایی</h1>
                        <h1 className="bg-gray-700 text-white px-3 py-1 rounded-3xl">درام</h1>
                    </div>
                    <button className="border border-gray-300 hover-box rounded-xl text-white py-2 px-4">
                        خرید بلیت
                    </button>
                </div>
            </div>
            <img src={Imagem1} alt="" className="w-[33%] h-auto rounded" />
        </div>
    </div>
</div>

</div>
        </> 
    );
}

export default Midle4;
