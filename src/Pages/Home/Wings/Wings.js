import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Wings.css'

const Wings = () => {

  return (
    <section className="dark:bg-[#202c4c]  text-black dark:text-white content-center bg-contain bg-sky-100">
      <div className="max-w-screen-2xl  grid py-10 px-5 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-3  mx-auto md:justify-items-center place-content-center ">
        <div className="grid grid-cols content-start  px-5 lg:py-6 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify  ">
          <h1 className="text-center text-3xl font-bold  py-5 pb-5">
            {" "}
            We Find
          </h1>
          <figure>
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU">
                <img
                  src="https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/103416429_4272417112783338_3359577853603362578_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHQkuFF-602ZVlajLb5DdLzRPVjXX3dsQ5E9WNdfd2xDuPvTqr35wojmfXm9olFICUqEiLzyUi1XfuRrFs7tIvG&_nc_ohc=685J7XsbVJIAX8E4y7Q&_nc_oc=AQkzvD8QhpBZITVKBMoQgqpKpgRVpjJCN40yN-2ZjxSDUIU-jWrtHcLUv1r-TqNLuIk&_nc_ht=scontent.fdac8-1.fna&oh=00_AfCgZaJq4H1jRBuO3CcXCCtVjjeqEKbDM5kdyVefIMqzBA&oe=63CB5435"
                  alt=""
                  className="lg:h-auto md:h-[300px] mx-auto w-full rounded-md"
                />
              </PhotoView>
            </PhotoProvider>
          </figure>

          <div>
            <p className=" py-5 lg:text-xl text-lg md:text-lg">
              We find blood for patients in need and to motivate people to
              donate blood.
            </p>
          </div>
        </div>

        <div className="grid grid-cols content-start  px-5 lg:py-6 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify  ">
          <h1 className="text-center text-3xl font-bold  py-5 pb-5">
            {" "}
            We Educate{" "}
          </h1>
          <figure>
            <img
              src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/320198773_475384468032801_1502468990745031543_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH2Se5xzWM26rf7zsh0-Ss_PwmXM8BCGQg_CZczwEIZCIjFG7gxfJslgeaanH1xe72A6Bss_RYaQNNY0G1z5CaD&_nc_ohc=3QqOU0_zkosAX81YmOn&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDz1SklDnPx9YiPYU8Xf7XiTIDgVH66dnBxYjzXH90tYw&oe=63A92A68"
              alt="Shoes"
              className="lg:h-auto md:h-[300px] mx-auto w-full rounded-md"
            />
          </figure>
          <div>
            <p className="  py-5 lg:text-xl text-lg md:text-lg">
              We educate children living around SUST area with a view to pass on
              the light of education to every corner of the society.
            </p>
          </div>
        </div>
        <div className="grid grid-cols content-start  px-5 lg:py-6 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify ">
          <h1 className="text-center text-3xl font-bold  py-5 pb-5">
            {" "}
            We Provide Care{" "}
          </h1>
          <figure>
            <img
              src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/320211687_1123422791646213_5282050270361505950_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGXcMEtCtxIvK7yPBOAf4l5aXzH5K3VSK5pfMfkrdVIrsCdDVPs85e0AqXCTc1TsFQ_F1l1dfB8SMqFokju1pq5&_nc_ohc=xghv29JqSt0AX_vis10&_nc_ht=scontent.fdac8-1.fna&oh=00_AfANRljTKUP2b2-t5BbTRrJSNJpQdivs6sE5XHWaKmGKbw&oe=63A9BCF3"
              alt="Shoes"
              className="lg:h-auto md:h-[300px] mx-auto w-full rounded-md"
            />
          </figure>
          <div>
            <p className=" text-lg py-5">
              We provide winter clothes for cold stricken poor families living
              in the remote corners of the country.
            </p>
          </div>
        </div>

        <div className="grid grid-cols content-start  px-5 lg:py-6 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify ">
          <h1 className="text-center text-3xl font-bold  py-5 pb-5">
            We Consult
          </h1>
          <figure>
            <img
              src="https://scontent.fdac8-1.fna.fbcdn.net/v/t31.18172-8/178749_448394935185594_476227749_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeHHnM1g07RWvf2KH8S_maMxxghY4e1uOAfGCFjh7W44B0vTu4gW8MxABSpvX-rHMe7k3aNEl74rmsyYnw9cg-1V&_nc_ohc=RBSVGoLxwmsAX-nMR0p&_nc_ht=scontent.fdac8-1.fna&oh=00_AfBYC9-g_8UlJ-ZiDnTUnJGSFvHCxSgsECi7nQL38ODAiw&oe=63CB621A"
              alt="Shoes"
              className="lg:h-auto md:h-[300px] mx-auto w-full rounded-md"
            />
          </figure>
          <div>
            <p className=" py-5 lg:text-xl text-lg md:text-lg">
              We raise awareness among people to make them aware of their rights
              and stop violent activities that happens toward women.
            </p>
          </div>
        </div>
        <div className="grid grid-cols content-start  px-5 lg:py-6 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify ">
          <h1 className="text-center text-3xl font-bold  py-5 pb-5">
            We Serve{" "}
          </h1>
          <figure>
            <img
              src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/313412284_8737676572924014_3642148429627876888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEU1NmtD5m58zmXEw34ZeUg6xEr7HnENXHrESvsecQ1cVyvhGHEYMdtsuvK67jbvD4eDVVVIFRg69qvX9V4Ipvc&_nc_ohc=kA1zRq0nOJUAX_9IsIo&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDVNBLdqgYNDBI2fo_d-cbnco_zLV3Hp9cv1fE0G7pBtg&oe=63A920DD"
              alt="Shoes"
              className="lg:h-auto md:h-[300px] mx-auto w-full rounded-md "
            />
          </figure>
          <div>
            <p className="  py-5 lg:text-xl text-lg md:text-lg">
              We arrange charity programs to serve various humanitarian purposes
              on the basis of their urgency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wings;