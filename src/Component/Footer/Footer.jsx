import React, { useEffect, useState } from "react";
import image1 from "./image/1.png";
import "./footer.css";
import { MdOutlineVideoLibrary } from "react-icons/md";
import image2 from "../dist/Image/3.png";
import { FaFire } from "react-icons/fa";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Linephoto from "../LinePhoto/Linephoto";
import DropdownMenu from "../Collections/Collections";
import Serials from "../Serials/Serials";
import Movies from "../Movies/Movies";
import Child from "../Child/Child";
import Midle from "../Midle/Midle";
import Midle2 from "../Midle2/Midle2";
import Slider from "../Slider/Slider";
import Sliderbar from "../Slider/Slider";
import Midle3 from "../Midle3/Midle3";
import Midle4 from "../Midle4/Midle4";
import Slider2 from "../Slider2/Slider2";
import More from "../More/More";
import More2 from "../More2/More2";

const Footer = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolledToTop(true);
      } else {
        setScrolledToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-[#292a2a] ">
        <div
          style={{
            backgroundColor: "#1D1E1D",
            minHeight: "100vh",
            alignItems: "center",
          }}
        >
          <div
            className={`fixed-header  w-full h-[10vh]  flex flex-row ${
              scrolledToTop ? "bg-transparent" : "bg-black"
            }`}
          >
            <button className="bg-stone-700 text-xs font-bold hover-box ml-4 sm:ml-[6%] text-center text-white my-2 px-4 py-3 rounded-sm">
              ورود
            </button>
            <button className="bg-[#40bb40]  font-bold hover-box text-xs sm:text-sm md:text-base lg:text-lg ml-2 sm:ml-[1%] flex items-center justify-center text-center text-white my-2 px-4 py-1 rounded-sm truncate">
  خرید اشتراک <MdOutlineVideoLibrary className="ml-1" />
</button>


            <div className="flex font-bold  ml-[18%] mr-3 hover-box items-center justify-center text-center text-white text-xs opacity-[80%]">
              <a href="#">جستجو</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 28 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <div className="dropdown gap-7 lg:flex flex-row rounded-sm pb-1 text-center text-white  my-1 opacity-85 custom:hidden block ">
              <a
                href="#"
                className="text-xs hover-box font-bold flex flex-row items-center justify-center ml-1 rounded-sm"
              >
                <Child />
              </a>
              <div className="mt-2 ">
                <a
                  href="#"
                  className="flex font-bold flex-row text-xs items-center justify-center ml-1 rounded-sm"
                >
                  فیلیمو مدرسه
                  <img src={image2} alt="" className="ml-1 size-6 mr-2" />
                </a>
              </div>
              <a href="#" className="mt-2">
                <DropdownMenu />
              </a>
              <a
                href="#"
                className="text-xs font-bold hover-box flex flex-row items-center justify-center ml-1 rounded-sm"
              >
                خارجی
              </a>
              <a
                href="#"
                className="text-xs font-bold hover-box flex flex-row items-center justify-center ml-1 rounded-sm"
              >
                ایرانی
              </a>
              <a
                href="#"
                className="text-xs font-bold hover-box flex flex-row items-center justify-center ml-1 rounded-sm"
              >
                <Serials />
              </a>
              <a
                href="#"
                className="text-xs font-bold hover-box flex flex-row items-center justify-center ml-1 rounded-sm"
              >
                <Movies />
              </a>
              <a
                href="#"
                className="text-xs font-bold hover-box flex flex-row items-center justify-center ml-1 rounded-sm"
              >
                فیلیموتور <FaFire className="ml-1 w-4 h-4" color="#F48D00" />
              </a>
            </div>
            <div className="flex items-center pr-5">
              <label className="flex flex-row items-center font-inherit rounded-lg text-white font-bold ml-5">
                فیلیمو
              </label>
              <img
                src={image1}
                alt=""
                className="w-6 h-6 rounded-lg opacity-90 ml-2"
              />
            </div>
          </div>

          <div className="flex items-center justify-center text-center">
            <div className="header  relative overflow-hidden bg-cover bg-no-repeat p-12 text-center">
            
            <div className="hover-box-container flex flex-col items-center">

            <div className="hover-box bg-[#292a2a] rounded-lg w-[40%] sm:w-[80%] ml-[30%] sm:ml-[10%] flex items-center justify-start text-white font-bold mt-9 sm:mt-20 custom:mt-44 md:mt-10 lg:mt-16 py-3 px-4">
    <button className="bg-[#47d447] text-sm pt-3 pb-3 opacity-[80%] text-white my-2 px-[35px] text-nowrap rounded-lg">
      خرید اشتراک
    </button>
    <div className="flex flex-col text-nowrap ml-auto">
      <div className="flex">
        <label className="bg-[#C0FFCA] ml-2 text-[green] text-sm rounded-2xl p-[5px]">
          30% تخفیف
        </label>
        <h1 className="mt-1 p-[1px] text-[15px]">یک ماهه</h1>
      </div>
      <h2 className="mt-3 text-right">
        <span className="inline-block mr-1 opacity-40">
          ( تومان/ماهانه 99,000 )
        </span>
        <span className="inline-block mr-1">تومان/ماهانه</span>
        <span className="inline-block">115,000</span>
      </h2>
    </div>
  </div>


  <div className="hover-box bg-[#292a2a] rounded-lg w-[40%] sm:w-[80%] ml-[30%] sm:ml-[10%] flex items-center justify-start text-white font-bold mt-2 py-3 px-4">
    <button className="bg-[#47d447] text-sm pt-3 pb-3 opacity-[80%] text-white my-2 px-[35px] text-nowrap rounded-lg">
      خرید اشتراک
    </button>
    <div className="flex flex-col text-nowrap ml-auto">
      <div className="flex mb-[10%] items-center ml-40">
        <label className="bg-[#C0FFCA] ml-2 text-[green] text-sm rounded-2xl p-[5px]">
          30% تخفیف
        </label>
        <h1 className="mt-1 p-[1px] text-[15px]">سه ماهه</h1>
      </div>
      <h2 className="mt-3 text-right">
        <span className="inline-block mr-1 opacity-40">
          ( تومان/ماهانه 99,000 )
        </span>
        <span className="inline-block">
          297,000 تومان / 3 ماه
        </span>
      </h2>
    </div>
  </div>
</div>



              <div className="flex flex-col ml-auto ">
                <span className="text-white rounded-sm opacity-60 mt-[10px]">
                  . %10 مالیات بر ارزش افزوده به قیمت اشتراک‌ها اضافه می‌شود.
                </span>
                <a
                  href="#"
                  className="text-white mt-3 ml-[40%] w-[20%] flex flex-row items-center justify-center hover-link"
                >
                  <HiOutlineChevronLeft />
                  مشاهده همه اشتراک‌ها
                  <hr />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h1 className="float-right text-white text-xl font-bold mt-[2%] pr-[6%]">
              محبوب‌ترین‌های فیلیمو
            </h1>
            <div className="switch_cat d-flex font-bold pr-[10px] mt-[2%] w-[90px] float-right ui-jc-sb">
              <div className="switch_option active rounded-sm pr-[6px] pl-[10px]">
                فیلم‌ها
              </div>
              <div className="switch_option active rounded-sm pr-[6px] pl-[10px]">
                سریال
              </div>
            </div>
          </div>
          <div className="mb-20">
            <Linephoto />
          </div>
          <Midle />
          <Midle2 />
        </div>

        <div className="bg-[#171717]">
          <Sliderbar />
        </div>
        <div className="bg-gradient-to-l from-[#1d0101]">
          <Midle3 />
        </div>
        <div className="bg-gradient-to-b from-[#6b0505] md:from-[#270101]">
          <Midle4 />
        </div>
        <div className="bg-gradient-to-t from-[#0f0f0f]">
          <Slider2 />
        </div>
        <div className="bg-gradient-to-b from-[#000000] pb-[8%] pt-10">
          <More />
        </div>
        <div className="bg-[#02190c]">
          <More2 />
        </div>
      </div>
    </>
  );
};

export default Footer;
