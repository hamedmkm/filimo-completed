import React, { useState } from 'react';
import './more.css'; // استایل‌های سفارشی (اختیاری)
import { CiSquarePlus } from "react-icons/ci";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="one-faq_eachitem  App  text-right flex flex-col items-center   p-4 relative mb-2 rounded-lg shadow-lg">
      <div className="one-faq_question text-lg w-[100%]  font-semibold flex items-right cursor-pointer justify-end" onClick={toggleAnswer}>
        <CiSquarePlus className='text-orange size-8 mr-[65%]'/>
        {question}
      </div>
      {isOpen && (
        <div className="one-faq_answer pt-2 ">
          {answer}
        </div>
      )}
    </div>
  );
};

const More = () => {
  const faqData = [
    {
      question: 'آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟',
      answer: 'بله، شما می‌توانید همه فیلم و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و دانلود از طریق اپلیکیشن را تماشا کنید.'
    }
    // می‌توانید آیتم‌های دیگر FAQ را نیز اضافه کنید
  ];

  return (<>
  <div>
    <div><h1 className='text-white  font-bold text-[20px] items-center text-center'>سوالات متداول</h1>
    
    <h1 className='text-white opacity-65 pt-3 font-bold text-[15px] items-center text-center'>سوال شابع دیگر کاربران شاید برای شما پیش آمده باشد.</h1>
    </div>

    <div className="App pt-14 text-right text-[#fe621f] flex flex-col items-center ">
       
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
    <div className="App  text-right text-[#fe621f] flex flex-col items-center ">
       
       {faqData.map((item, index) => (
         <FAQItem
           key={index}
           question={item.question}
           answer={item.answer}
         />
       ))}
     </div>
     <div className="App  text-right text-[#fe621f] flex flex-col items-center ">
       
       {faqData.map((item, index) => (
         <FAQItem
           key={index}
           question={item.question}
           answer={item.answer}
         />
       ))}
     </div>
     <div className="App  text-right text-[#fe621f] flex flex-col items-center ">
       
       {faqData.map((item, index) => (
         <FAQItem
           key={index}
           question={item.question}
           answer={item.answer}
         />
       ))}
     </div>
    </div>
    </>
  );
};

export default More;
