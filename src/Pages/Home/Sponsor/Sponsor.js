import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import photo from "../../../Assets/Images/sponser.png";

const Sponsor = () => {
  return (
    <section className="  dark:text-slate-200 py-5 bg-[#bae5fdb8] dark:bg-[rgba(32,44,76,0.96)] ">
      <div className="mx-auto hero pb-12 pt-5 xl:w-[1250px]">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="lg:px-3 md:px-16 basis-5/12  px-3">
            <PhotoProvider>
              <PhotoView src={photo}>
                <img
                  src={photo}
                  style={{ borderRadius: "0px 100px 0px 100px" }}
                  alt=""
                  className=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="px-7 basis-7/12">
            <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
              Sponsor a Child
            </h1>
            <p className="lg:px-7 md:px-24 px-4 md:py-6 py-4  lg:text-xl text-lg md:text-lg font-medium text-justify">
              You can now sponsor a student of{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                KIN
              </span>{" "}
              <span className='text-red-600'style={{fontFamily: 'Arial black, Helvetica, sans-serif'}}>KIN</span>
              School through carrying their educational costs, providing them
              clothes & other financial needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
