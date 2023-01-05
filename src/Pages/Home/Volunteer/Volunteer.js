import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Volunteer = () => {
  return (
    <section className=" dark:text-slate-200  py-10 md:px-7 px-3 bg-[#d8f0fed1] dark:bg-[#202c4c] ">
      <div className="xl:w-[1150px] m-auto grid lg:grid-cols-2 lg:px-7 md:px-24 px-4 gap-10 ">
        <div>
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
            Become A Volunteer!
          </h1>
          <p className="lg:px-7 md:px-5 px-4  lg:py-1 lg:pt-6 py-2 lg:text-xl text-lg md:text-lg text-justify">
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              KIN
            </span>{" "}
            encourages everyone who wishes to work for the poor, helpless people
            and bring a positive change in their lives, to be a part of it.
            Every year, we launch{" "}
            <span className="font-bold">Organizing Week</span> where you can
            collect our membership forms. Through viva process you can be
            selected as our <span className="font-bold">General Member</span>.
          </p>
          <p className="lg:px-7 md:px-5 px-4  lg:py-6 py-1 lg:text-xl text-lg md:text-lg text-justify">
            The other most convenient way of doing so is by joining “
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              KIN
            </span>{" "}
            <span className="font-bold">School</span> ”. As the workforce of
            this place are some young helpful students from SUST who voluntarily
            come and work for the children wholeheartedly,{" "}
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              KIN
            </span>{" "}
            encourages new faces every year to come and join them
          </p>
        </div>
        <div className="self-center">
          <figure>
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-06-at-1.23.16-AM.jpeg">
                <img
                  src="https://kinsust.org/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-06-at-1.23.16-AM.jpeg"
                  alt=""
                  className="shadow-xl"
                  style={{ borderRadius: "022px 86px 0px 0140px" }}
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
