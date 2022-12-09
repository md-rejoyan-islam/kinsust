import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Volunteer = () => {

  return (
    <section className=" dark:text-slate-200  py-10 md:px-7 px-3 bg-[#d8f0fed1] dark:bg-[#202c4c] ">
      <div className="xl:w-[1150px] m-auto grid lg:grid-cols-2  gap-10 ">
        <div>
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center py-5">
            Become A Volunteer!
          </h1>
          <p className="md:px-16 lg:px-0 lg:py-6 py-2 lg:text-xl text-[17px] md:text-lg text-justify">
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              "KIN"
            </span>{" "}
            encourages everyone who wishes to work for the poor, helpless people
            and bring a positive change in their lives, to be a part it. Every
            year we launch Organizing Week where you can collect our membership
            forms. Through viva process you can be selected as our General
            Member.
          </p>
          <p className="pt-5 md:px-16 lg:px-0 lg:py-6 py-2 lg:text-xl text-[17px] md:text-lg text-justify">
            The other most convenient way of doing so is by joining “KIN
            School”. As the workforce of this place are some young helpful
            students from SUST who voluntarily come and work for the children
            wholeheartedly,{" "}
            <span
              className="text-red-600"
              style={{ fontFamily: "Arial black, Helvetica, sans-serif" }}
            >
              "KIN"
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