import "./midle3.css";
import Imagem3 from "./Image/imagem3.jpeg";

const Midle3 = () => {
  return (
    <div className="container ">
      <div className="text-container ">
        <h1 className="text-white mt-40  text-xl  ">دنیایی متنوع از فیلم و کارتون‌های کودکانه</h1>
        <h2 className="text-white opacity-75 ml-[45%] mt-5">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
        </h2>
        <div className="flex justify-end mt-10 gap-3">
  <button className="text-[#2b2b2b] btn bg-white">تماشای فیلیمو کودک</button>
  <button className="text-[#2b2b2b] btn bg-white">فیلیمو کودک بساز</button>
</div>

      </div>
      <img src={Imagem3} alt="تصویر" className="" />
    </div>
  );
};

export default Midle3;
