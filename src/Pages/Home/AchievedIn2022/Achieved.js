import React from "react";

const Achieved = () => {
  return (
    <section className="dark:text-slate-200  bg-[#c8eafdac] dark:bg-[#293453]">
      <div className="xl:w-[1250px]  mx-auto ">
        <div className="py-5 lg:px-7 md:px-24 px-4">
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
            What we have achieved
          </h1>
        </div>
        <div className="w-full flex lg:px-7 md:px-24 px-4">
          <div className="w-1/2">
            <div className="col-span-2 py-6 lg:py-0 ">
              <p className=" text-2xl md:text-3xl font-bold my-2 lg:pb-7  md:pb-8 pb-8">
                During the Sylhet flood 2022
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a] ">
                  ৳ 880,530 +{" "}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold dark:text-[#fff] ">
                  Donation Managed
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a]">
                  1,600 +
                </h1>
                <p className="dark:text-white text-lg md:text-xl text-zinc-400 font-bold">
                  Food packages
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a]">
                  200 +
                </h1>
                <p className="dark:text-white text-lg md:text-xl text-zinc-400 font-bold">
                  sanitary
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a]">
                  {" "}
                  21{" "}
                </h1>
                <p className="text-lg md:text-xl dark:text-white text-zinc-400 font-bold">
                  village reach
                </p>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal pb-5 "></div>
          <div className="w-1/2">
            <div className=" py-6 lg:py-0 ">
              <p className="text-2xl md:text-3xl font-bold my-2">
                throughout the ongoing COVID-19 pandemic
              </p>
            </div>
            <div className="grid lg:grid-cols-2  grid-cols-1">
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a] ">
                  {" "}
                  ৳ 360,593 +{" "}
                </h1>
                <p className="dark:text-white text-lg md:text-xl text-zinc-400 font-bold">
                  Donation Managed
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a]">
                  {" "}
                  727 +{" "}
                </h1>
                <p className="dark:text-white text-lg md:text-xl text-zinc-400 font-bold">
                  Food Packages
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a]">
                  {" "}
                  ৳ 3,256 +{" "}
                </h1>
                <p className="dark:text-white text-lg md:text-xl text-zinc-400 font-bold">
                  Clothes
                </p>
              </div>
              <div className="pb-12">
                <h1 className="flex justify-center text-center lg:text-4xl md:text-3xl font-bold py-2 text-lg items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="lg:text-2xl md:text-2xl font-bold py-2 text-lg dark:text-[#fef08a] px-1">
                    36.5K +
                  </span>
                </h1>
                <p className="justify-center text-lg md:text-xl text-zinc-400 font-bold flex">
                  <span className="px-1 dark:text-white">FB live</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achieved;
