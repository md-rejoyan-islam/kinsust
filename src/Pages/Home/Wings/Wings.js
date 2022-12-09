import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Wings.css'

const Wings = () => {

  return (
    <section className="dark:bg-[#202c4c]  text-black dark:text-white content-center bg-contain bg-sky-100">
      <div className="max-w-screen-2xl  grid py-10 px-5 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-3  mx-auto  ">
        <div className="grid grid-cols content-start  px-5 lg:py-10 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify  ">
          <h1 className="text-center text-3xl font-bold  lg:py-5 pb-5">
            {" "}
            We Find
          </h1>
          <figure>
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
                  alt=""
                  className="mx-auto w-full"
                />
              </PhotoView>
            </PhotoProvider>
          </figure>

          <div>
            <p className=" lg:text-lg py-5 text-[17px] md:text-[18px]">
              We find blood for patients in need and to motivate people to
              donate blood.
            </p>
          </div>
        </div>

        <div className="grid grid-cols content-start  px-5 lg:py-10 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify  ">
          <h1 className="text-center text-3xl font-bold  lg:py-5 pb-5">
            {" "}
            We Educate{" "}
          </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
              className="mx-auto w-full"
            />
          </figure>
          <div>
            <p className="  lg:text-lg py-5 text-[17px] md:text-[18px]">
              We educate children living around SUST area with a view to pass on
              the light of education to every corner of the society.
            </p>
          </div>
        </div>
        <div className="grid grid-cols content-start  px-5 lg:py-10 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify ">
          <h1 className="text-center text-3xl font-bold  lg:py-5 pb-5">
            {" "}
            We Provide Care{" "}
          </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
              className="mx-auto w-full"
            />
          </figure>
          <div>
            <p className=" text-lg py-5">
              We provide winter clothes for cold stricken poor families living
              in the remote corners of the country.
            </p>
          </div>
        </div>

        <div className="grid grid-cols content-start  px-5 lg:py-10 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify ">
          <h1 className="text-center text-3xl font-bold  lg:py-5 pb-5">
            We Consult
          </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
              className="mx-auto w-full"
            />
          </figure>
          <div>
            <p className=" lg:text-lg py-5 text-[17px] md:text-[18px]">
              We educate children living around SUST area with a view to pass on
              the light of education to every corner of the society. We Provide
              Care We provide winter clothes for cold stricken poor families
              living in the remote corners of the country. We Consult We raise
              awareness among people to make them aware of their rights and stop
              violent activities that happens toward women.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols content-start  px-5 lg:py-10 py-5 bg-[#cdecfe] dark:bg-[#293453] rounded-md md:py-0 bg-contain text-justify ">
          <h1 className="text-center text-3xl font-bold  lg:py-5 pb-5">
            We Serve{" "}
          </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
              className="mx-auto w-full"
            />
          </figure>
          <div>
            <p className="  lg:text-lg py-5 text-[17px] md:text-[18px]">
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