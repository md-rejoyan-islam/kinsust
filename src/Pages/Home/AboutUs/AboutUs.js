import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AboutUs = () => {
    return (
      <section className=" text-black lg:py-24 py-24 bg-[#dbdffd]  dark:bg-[#1e293b] dark:text-white">
        <div className="mx-auto hero  lg:w-[1100px] text-justify">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 ">
            <div className="px-10">
              <PhotoProvider>
                <PhotoView src="https://kinsust.org/wp-content/uploads/2021/06/101894916_4272417116116671_6529514659488356489_n.jpg">
                  <img
                    src="https://kinsust.org/wp-content/uploads/2021/06/101894916_4272417116116671_6529514659488356489_n.jpg"
                    className="rounded-lg shadow-2xl"
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
            <div className="px-10">
              <h1 className="text-5xl font-bold text-center">About us</h1>
              <p className="py-6 text-2xl">
                The word "KIN" stands for "relative". KIN was founded in the
                year 2003 with the help of some young dreamers from SUST.
              </p>
              <p className="my-5 w-2/3 m-auto text-[17px]">
                KIN was founded with a view to helping the destitute people
                living around the University area with the basic necessities of
                human life. KIN helps them as a relative helps us in our time of
                emergency.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;