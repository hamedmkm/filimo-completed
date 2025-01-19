import "./More2.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const More2 = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className="text-7xl text-white font-bold pt-10 ">فیلیمو</h2>
                </div>
                <div className="flex flex-wrap items-center text-center justify-center gap-20 mt-9">
                    <h1 className="flex items-center text-white text-base opacity-75">
                     
                        
                        هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
                        <IoCheckmarkCircleSharp className="mr-2 bg-#07a807" />
                    </h1>

                    <h1 className="flex items-center text-white text-base opacity-75">
                       
                        پشتیبانی 24 ساعته برای راهنمایی شما
                        <IoCheckmarkCircleSharp className="mr-2 bg-#07a807" />
                    </h1>

                    <h1 className="flex items-center text-white text-base opacity-75">
                       
                      
                        هزاران انیمیشن و کارتون برای کودکان
                        <IoCheckmarkCircleSharp className="mr-2 bg-#07a807" />
                    </h1>
                </div>
                <div className="flex items-center text-center justify-center pt-20 pb-10">
            <button className="btn border border-[green]  px-10 py-5 text-lg pb-11  bg-[#2ecd2e] text-white rounded-xl">
                خرید اشتراک و تماشا
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-subscription" viewBox="0 0 24 24"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g></defs><g fill="#FFFFFF"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g></svg>
            </button>
        </div>
            </div>
        </>
    );
};

export default More2;
