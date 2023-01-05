import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const TouchWithUs = () => {
  return (
    <section className="bg-[#bae5fdca] dark:bg-[#202c4cf7] py-16 px-5 text-black dark:text-slate-200 ">
      <div className=" xl:w-[1150px] lg:px-12 md:px-28 px-4 mx-auto">
        <figure>
          <PhotoProvider>
            <PhotoView src="https://kinsust.org/wp-content/uploads/2021/05/photo6170088535432997804.jpg">
              <img
                src="https://kinsust.org/wp-content/uploads/2021/05/photo6170088535432997804.jpg"
                alt="" className="rounded-md"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
      </div>
      <div className="md:w-[650px]  pt-5 mx-auto px-5">
        <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
          Get In Touch With Us
        </h1>
        <p className="lg:px-7 md:px-5 px-4  lg:py-6 py-2 lg:text-xl text-lg md:text-lg text-justify">
          Want to get the latest updates? Then subscribe to our newsletter by
          creating account for latest events, national & international days
          posts and much more
        </p>
      </div>
    </section>
  );
};

export default TouchWithUs;
