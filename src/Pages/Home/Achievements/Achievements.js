import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import joyBanglaAwardPhoto from "../../../Assets/Images/Home/joyBanglaAward.jpg";
import joyBanglaAwardPhoto2 from "../../../Assets/Images/Home/second.jpg";
const Achievements = () => {
  
  return (
    <section className="dark:text-slate-200 dark:bg-[#293453f3]   bg-[#cdecfe] ">
      <div className=" lg:px-7 md:px-24 px-4  py-10 xl:w-[1250px]  mx-auto ">
        <div className=" m-auto px-4">
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
            Our Achievements
          </h1>
          <p className="md:px-16 lg:px-7 lg:py-6 py-2 lg:text-xl text-lg md:text-lg text-justify ">
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              KIN
            </span>{" "}
            was awarded the Joy Bangla Youth Award by Young Bangla for being one
            of the 50 best organizations among the other 1300 organizations and
            awarded by SANDHANI 8 times in a row for being the Best Non-medical
            Blood Donation Organization.
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 gap-5 my-6 justify-items-center">
            <figure>
              <PhotoProvider>
                <PhotoView src={joyBanglaAwardPhoto}>
                  <img
                    src={joyBanglaAwardPhoto}
                    alt=""
                    className="h-[350px] w-min md:w-full border-4 rounded-md border-[#96d8ff]"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <figure>
              <PhotoProvider>
                <PhotoView src={joyBanglaAwardPhoto2}>
                  <img
                    src={joyBanglaAwardPhoto2}
                    alt=""
                    className="h-[350px]  md:w-[466px] w-[511px] border-4 rounded-md border-[#96d8ff]"
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