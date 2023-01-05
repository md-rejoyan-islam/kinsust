import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import photo from "../../../Assets/Images/about.jpg";
const AboutUs = () => {
  
  return (
    <section className="bg-sky-100   dark:bg-[rgb(32,44,76)]  dark:text-slate-200">
      <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1250px] text-justify">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
          <div className="lg:px-3 md:px-16 basis-5/12 ">
            <PhotoProvider>
              <PhotoView src={photo}>
                <img src={photo} className="rounded-lg shadow-2xl " alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className=" md:px-7  basis-7/12">
            <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
              About us
            </h1>
            <p className="lg:px-7 md:px-24 px-4 md:pt-6 pt-4  lg:text-xl text-lg md:text-lg font-medium text-justify">
              The word "
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                KIN
              </span>
              " stands for "relative".{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                KIN{" "}
              </span>{" "}
              was founded in the year 2003 with the help of some young dreamers
              from SUST.
            </p>
            <p className="lg:px-7 md:px-24 px-4 md:pt-6 pt-4  lg:text-xl text-lg md:text-lg font-medium text-justify">
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                KIN
              </span>{" "}
              was founded with a view to helping the destitute people living
              around the University area with the basic necessities of human
              life.{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                KIN
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
