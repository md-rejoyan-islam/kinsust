import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Achievements = ({dark}) => {
  
  return (
    <section className="dark:text-slate-200 dark:bg-[#293453f3]   bg-[#cdecfe] ">
      <div className=" px-4 py-10 max-w-screen-2xl mx-auto ">
        <div className="xl:w-[1050px] m-auto">
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold py-5 px-5">
            Our Achievements
          </h1>
          <p className="md:px-16 lg:px-0 lg:py-6 py-2 lg:text-xl text-lg md:text-lg font-medium text-justify px-5">
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              "KIN"
            </span>{" "}
            was awarded the Joy Bangla Youth Award by Young Bangla for being one
            of the 50 best organizations among the other 1300 organizations and
            awarded by SANDHANI 8 times in a row for being the Best Non-medical
            Blood Donation Organization.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-5 my-6 justify-items-center">
            <figure>
              <PhotoProvider>
                <PhotoView src="https://kinsust.org/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-06-at-1.04.21-AM-1.jpeg">
                  <img
                    src="https://kinsust.org/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-06-at-1.04.21-AM-1.jpeg"
                    alt=""
                    className="h-[400px] w-contain w-min md:w-full"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <figure>
              <PhotoProvider>
                <PhotoView src="https://kinsust.org/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-06-at-1.04.22-AM.jpeg">
                  <img
                    src="https://kinsust.org/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-06-at-1.04.22-AM.jpeg"
                    alt=""
                    className="h-[400px] w-min md:w-full"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;