import image1 from "../dist/Image/1m.jpeg"
import { PiMonitorLight } from "react-icons/pi";
import { GrAndroid } from "react-icons/gr";
import { FaAngleLeft } from "react-icons/fa6";
const Midle2 = () => {
    return ( 
        <>
            <div className="flex  flex-row bg-gradient-to-b from-[#0b0b0b] box-border h-auto w-100 pt-9">
                <img src={image1} alt="" className="size-[50%]" />
                <div className="flex pb-10 flex-col ml-auto mr-[5%] text-right">
                    <h1 className="text-white mr-3 text-xl font-bold">چطور با تلویزیون، فیلیمو تماشا کنم؟</h1>
                    <h2 className="text-white mt-5 opacity-75 text-sm	 w-full max-w-lg break-words">
                        ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.
                    </h2>

                    

                    <h3 className="text-white mt-20 text-lg font-bold opacity-75 flex flex-row-reverse items-center">
            <PiMonitorLight className="ml-2 size-7" />
            تلویزیون
    
        </h3>
        <label className=" w-100 text-white opacity-75 mt-1 text-sm "> Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV d
        evices - Samsung</label>


        <h4 className="text-white mt-10 text-lg font-bold opacity-75 flex flex-row-reverse items-center">
            <GrAndroid className="ml-2 size-7" />
            اندروید تی‌وی
    
        </h4>
        <label className=" w-100 text-white opacity-75 mt-1 text-sm "> 
        NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom
        
        </label>
        
        <button href="#" className="bg-[#494949] ml-[40%] flex flex-row-reverse items-center font-bold hover-link text-xs w-[60%]  text-white mt-[9%] rounded-xl py-3 px-10 font-inherit ">  ویدیوهای آموزشی تماشا با تلویزیون  
            
            <FaAngleLeft className="mr-1"/>
            </button>
                </div>
            </div>
        </>
    );
}

export default Midle2;
