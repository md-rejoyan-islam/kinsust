import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Sponsor = () => {
    return (
      <section
        className=" dark:bg-[#0f172a] dark:text-white bg-[#8CC0DE]"
  
      >
        <div className="mx-auto hero pb-24 pt-5 lg:w-[1100px]">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <div className="lg:w-1/2 ">
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
            <div className="px-10 lg:w-1/2">
              <h1 className="text-7xl font-bold ">Sponsor a Child</h1>
              <p className="py-6 text-2xl">
                You can now sponsor a student of KIN School through carrying
                their educational costs, providing them clothes & other
                financial needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Sponsor;