import "./midle.css";
import image1 from "../dist/Image/1.jpeg";
import { BsLaptop } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BsController } from "react-icons/bs";

const Midle = () => {
    return (
        <div className="flex-container  ">
           <h1 className="text-white text-lg font-bold pr-4">تماشای فیلیمو با همه دستگاه‌ها</h1>
            <h2 className="text-sm  font-bold">می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</h2>
            <h3 className="text-base font-bold">
                کامپیوتر و لپ‌تاپ <BsLaptop className="ml-2 size-7" />
               
            </h3>
            <p className="text-xs font-bold">
                
                
            windows PC - MacOS - Chrom OS
                
                </p>
            <h4 className="text-base  font-bold">
            موبایل و تبلت
                <CiMobile2  className="ml-2 size-7" />
               
            </h4>
            <p1 className="text-xs font-bold">
                
            Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets
                
            
            
            
            
            </p1>


            <h5 className="text-base  font-bold">
            کنسول‌های بازی (Browser)                
                
                <BsController  className="ml-2 size-7" />
               
            </h5>
            <p2 className="text-xs font-bold">
                
            Xbox Series S - Xbox Seris X - PS5 - PS4
            </p2>


            <button href="#" className="bg-[#47d447] font-bold hover-link text-xئ mr-[5%] flex items-center justify-center text-center text-white mt-[25%] rounded-2xl py-3 px-7  font-inherit ">  خرید اشتراک و تماشا 
            <MdOutlineVideoLibrary className="size-6 pl-2"/>
            
            </button>
                      

            <img src={image1} alt="" className="mb-9 mr-[70px] " />
        </div>
    );
}

export default Midle;

