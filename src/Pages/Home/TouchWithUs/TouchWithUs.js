import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TouchWithUs = () => {
    return (
      <section className="bg-base-300 py-16 px-5 dark:text-white dark:bg-[#0f172a]">
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
        <div className="xl:w-[600px] pb-16 pt-5 mx-auto">
          <h1 className="text-6xl font-bold py-8">Get In Touch With Us</h1>
          <p className="text-lg">
            Want to get the latest updates? Then subscribe to our newsletter by
            creating account for latest events, national & international days
            posts and much more
          </p>
        </div>
      </section>
    );
};

export default TouchWithUs;