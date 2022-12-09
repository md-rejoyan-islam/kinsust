import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AboutUs = () => {
  
  return (
    <section className="bg-sky-100   dark:bg-[rgb(32,44,76)]  dark:text-slate-200">
      <div className="lg:py-24 py-8 md:py-12 mx-auto hero  lg:w-[1100px] text-justify">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 ">
          <div className="lg:px-6 md:px-16 basis-3/5 px-3">
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2021/06/101894916_4272417116116671_6529514659488356489_n.jpg">
                <img
                  src="https://kinsust.org/wp-content/uploads/2021/06/101894916_4272417116116671_6529514659488356489_n.jpg"
                  className="rounded-lg shadow-2xl w-full"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className=" px-7 basis-2/5">
            <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-5 lg:pt-0">About us</h1>
            <p className="md:px-16 lg:px-0 lg:py-6 py-2 lg:text-xl text-lg md:text-lg font-bold">
              The word{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                "KIN"
              </span>{" "}
              stands for "relative".{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                KIN{" "}
              </span>{" "}
              was founded in the year 2003 with the help of some young dreamers
              from SUST.
            </p>
            <p className="my-7 w-3/4 m-auto text-[16px] lg:text-[17.5px] dark:text-[#ffffffca]">
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                "KIN"
              </span>{" "}
              was founded with a view to helping the destitute people living
              around the University area with the basic necessities of human
              life.{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                "KIN"
              </span>{" "}
              helps them as a relative helps us in our time of emergency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
