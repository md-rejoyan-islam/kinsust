import React from "react";
import "./Faq.css";

const Faq = () => {
  const section = (e) => {
    e.target.classList.toggle("active_accordion");
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return (
    <section>
      <div className="py-16">
        <h1 className="text-5xl"> FAQ</h1>
        <p>Most frequent questions and answers</p>
      </div>
      <div className="xl:w-[1150px] m-auto mb-16 border-x  border-blue-400">
        <button
          className="accordion transition ease-in text-[18px] p-[18px] w-full  bg-[#dbeafe] hover:bg-blue-200 color-pink-300 cursor-pointer section border-y border-blue-500 "
          onClick={section}
        >
          Section 1
        </button>
        <div className="max-h-0 overflow-hidden bg-[#eff6ff]  ease-out duration-[0.5s] transition-max-h">
          <p className="py-2 border-b border-blue-500 px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <button
          className="accordion transition ease-in text-[18px] p-[18px] w-full  bg-[#dbeafe] hover:bg-blue-200 color-pink-300 cursor-pointer section border-y border-blue-500 "
          onClick={section}
        >
          Section 2
        </button>
        <div className="max-h-0 overflow-hidden bg-[#eff6ff]  ease-out duration-[0.5s] transition-max-h">
          <p className="py-2 border-b border-blue-500 px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <button
          className="accordion transition ease-in text-[18px] p-[18px] w-full  bg-[#dbeafe] hover:bg-blue-200 color-pink-300 cursor-pointer section border-y border-blue-500 "
          onClick={section}
        >
          Section 3
        </button>
        <div className="max-h-0 overflow-hidden bg-[#eff6ff]  ease-out duration-[0.5s] transition-max-h ">
          <p className="py-2 border-b border-blue-500 px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Faq;
