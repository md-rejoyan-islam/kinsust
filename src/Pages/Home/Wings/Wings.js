import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Wings.css'

const Wings = () => {
    return (
      <section className="dark:bg-[#26293b] bg-[#DBDFFD] grid py-10 px-5 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-3  mx-auto   text-black dark:text-white content-center">
        <div className="grid grid-cols content-start  px-5 py-10 bg-[#a3c9e7]  dark:bg-[#1e192f] rounded-md md:py-0">
          <h1 className="text-3xl font-bold  py-5"> We Find</h1>
          <figure>
            <PhotoProvider>
              <PhotoView src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </figure>

          <div>
            <p className=" text-lg py-5">
              We find blood for patients in need and to motivate people to
              donate blood.
            </p>
          </div>
        </div>
        <div className="rounded-md py-10 md:py-0 content-start grid grid-cols bg-[#a3c9e7]  dark:bg-[#1e192f]  px-5">
          <h1 className="text-3xl font-bold  py-5"> We Educate </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div>
            <p className=" text-lg py-5">
              We educate children living around SUST area with a view to pass on
              the light of education to every corner of the society.
            </p>
          </div>
        </div>
        <div className="rounded-md py-10 md:py-0 content-start grid grid-cols   px-5 bg-[#a3c9e7]  dark:bg-[#1e192f]">
          <h1 className="text-3xl font-bold  py-5"> We Provide Care </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div>
            <p className=" text-lg py-5">
              We provide winter clothes for cold stricken poor families living
              in the remote corners of the country.
            </p>
          </div>
        </div>

        <div className="rounded-md py-10 md:py-0 content-start grid grid-cols  bg-[#a3c9e7]  dark:bg-[#1e192f] px-5">
          <h1 className="text-3xl font-bold  py-5">We Consult</h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div>
            <p className=" text-lg py-5">
              We educate children living around SUST area with a view to pass on
              the light of education to every corner of the society. We Provide
              Care We provide winter clothes for cold stricken poor families
              living in the remote corners of the country. We Consult We raise
              awareness among people to make them aware of their rights and stop
              violent activities that happens toward women.
            </p>
          </div>
        </div>
        <div className=" rounded-md py-10 md:py-0 grid grid-cols content-start  bg-[#a3c9e7]  dark:bg-[#1e192f] px-5 ">
          <h1 className="text-3xl font-bold  py-5">We Serve </h1>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPzw-uxi9HLgn-ejabZ02qQtLcY1u1DBfa2B4pJO8fabxmmEHTZn_W3NQz6WQiHs_Y1U&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div>
            <p className=" text-lg py-5">
              We arrange charity programs to serve various humanitarian purposes
              on the basis of their urgency.
            </p>
          </div>
        </div>
      </section>
    );
};

export default Wings;