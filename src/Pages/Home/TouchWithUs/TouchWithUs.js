import React  from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TouchWithUs = () => {
   
    return (
      <section className="bg-[#bae5fdca] dark:bg-[#202c4cf7] py-16 px-5 text-black dark:text-slate-200 ">
        <div className="xl:w-[750px] mx-auto">
          <figure>
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2021/05/photo6170088535432997804.jpg">
                <img
                  src="https://kinsust.org/wp-content/uploads/2021/05/photo6170088535432997804.jpg"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
        </div>
        <div className="md:w-[600px]  pt-5 mx-auto px-5">
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center py-5">
            Get In Touch With Us
          </h1>
          <p className="md:px-16 lg:px-0 lg:py-6 py-2 lg:text-xl text-[17px] md:text-lg text-justify">
            Want to get the latest updates? Then subscribe to our newsletter by
            creating account for latest events, national & international days
            posts and much more
          </p>
        </div>
      </section>
    );
};

export default TouchWithUs;