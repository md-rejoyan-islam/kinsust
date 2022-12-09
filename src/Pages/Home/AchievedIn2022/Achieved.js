import React from 'react';

const Achieved = () => {
  
  return (
    <section className="dark:text-slate-200  bg-[#c8eafdac] dark:bg-[#293453]">
      <div className="max-w-screen-2xl px-3 mx-auto ">
        <div className="py-5">
          <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold text-center pt-5 lg:pt-0 px-8">
            What we have achieved
          </h1>
        </div>
        <div className="grid grid-cols-11">
          <div className="py-5 px-5 col-span-5">
            <div className="col-span-2 py-6 lg:py-0 ">
              <p className="lg:text-3xl text-xl font-bold my-2 pb-7 md:pb-0">
                During the Sylhet flood 2022
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  ৳ 880,530 +{" "}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  Donation Managed
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  1,600 +
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  Food packages
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  200 +
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  sanitary
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  {" "}
                  21{" "}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  village reach
                </p>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal pb-5"></div>
          <div className="py-5 px-5 col-span-5">
            <div className="col-span-2 py-6 lg:py-0 ">
              <p className="lg:text-3xl text-xl font-bold my-2">
                throughout the ongoing COVID-19 pandemic
              </p>
            </div>
            <div className="grid lg:grid-cols-2  grid-cols-1">
              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  {" "}
                  ৳ 360,593 +{" "}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  Donation Managed
                </p>
              </div>

              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  {" "}
                  727 +{" "}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  Food Packages
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  {" "}
                  ৳ 3,256 +{" "}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  Cloths
                </p>
              </div>
              <div className="pb-12">
                <h1 className="lg:text-4xl md:text-3xl font-bold py-2 text-lg">
                  36,700
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 font-bold">
                  FB live
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