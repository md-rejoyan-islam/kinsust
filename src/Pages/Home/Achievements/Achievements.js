import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Achievements = () => {
    return (
      <section className=" px-4 py-10 dark:bg-[#272442] dark:text-white bg-[#dbdffd]">
        <div className="xl:w-[1050px] m-auto">
          <h1 className="font-black text-5xl py-5 ">
            Our Achievements
          </h1>
          <p className="text-lg py-3">
            KIN was awarded the Joy Bangla Youth Award by Young Bangla for being
            one of the 50 best organizations among the other 1300 organizations
            and awarded by SANDHANI 8 times in a row for being the Best
            Non-medical Blood Donation Organization.
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
      </section>
    );
};

export default Achievements;