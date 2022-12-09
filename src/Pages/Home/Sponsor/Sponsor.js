import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Sponsor = ({dark}) => {
  return (
    <section className="  dark:text-slate-200 py-5 bg-[#bae5fdb8] dark:bg-[rgba(32,44,76,0.96)] ">
      <div className="mx-auto hero pb-12 pt-5 lg:w-[1100px]">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="basis-3/5 lg:w-1/2 px-3 md:px-12 lg:px-3">
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2021/05/1622482_812514435440307_3321214813691098768_o.jpg">
                <img
                  src="https://kinsust.org/wp-content/uploads/2021/05/1622482_812514435440307_3321214813691098768_o.jpg"
                  style={{ borderRadius: "00px 0100px 0px 0100px" }}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="md:px-10 px-3 lg:w-1/2 basis-2/5">
            <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold ">
              Sponsor a Child
            </h1>
            <p className="md:px-16 lg:px-0 py-6  lg:text-xl text-lg md:text-lg font-medium text-justify">
              You can now sponsor a student of{" "}
              <span
                className="text-red-600"
                style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
              >
                "KIN"
              </span>{" "}
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