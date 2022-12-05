import React from 'react';

const Achieved = () => {
    return (
      <section className="dark:bg-[#181b46] dark:text-base-100">
        <div className="py-5">
          <h1 className="text-6xl font-black pt-5">What we have achieved</h1>
        </div>
        <div className="grid grid-cols-11">
          <div className="py-5 px-5 col-span-5">
            <div className="col-span-2 py-6 lg:py-0 ">
              <p className="text-2xl font-bold my-3">
                During the Sylhet flood 2022
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
              <div className="pb-12">
                <h1 className="text-5xl font-black py-2">৳ 880,530 + </h1>
                <p className="text-xl text-zinc-400 font-bold">
                  Donation Managed
                </p>
              </div>
              <div className="pb-12">
                <h1 className="text-5xl font-black py-2">1,600 +</h1>
                <p className="text-xl text-zinc-400 font-bold">Food packages</p>
              </div>

              <div className="pb-12">
                <h1 className="text-5xl font-black py-2">200 +</h1>
                <p className="text-xl text-zinc-400 font-bold">sanitary</p>
              </div>

              <div className="pb-12">
                <h1 className="text-5xl font-black py-2"> 21 </h1>
                <p className="text-xl text-zinc-400 font-bold">village reach</p>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal pb-5"></div>
          <div className="py-5 px-5 col-span-5">
            <div className="col-span-2 py-6 lg:py-0 ">
              <p className="text-2xl my-3  font-bold">
                throughout the ongoing COVID-19 pandemic
              </p>
            </div>
            <div className="grid lg:grid-cols-2  grid-cols-1">
              <div className="pb-12">
                <h1 className="text-5xl font-black py-2"> ৳ 360,593 + </h1>
                <p className="text-xl text-zinc-400 font-bold">
                  Donation Managed
                </p>
              </div>

              <div className="pb-12">
                <h1 className="text-5xl font-black py-2"> 727 + </h1>
                <p className="text-xl text-zinc-400 font-bold">Food Packages</p>
              </div>
              <div className="pb-12">
                <h1 className="text-5xl font-black py-2"> ৳ 3,256 + </h1>
                <p className="text-xl text-zinc-400 font-bold">Cloths</p>
              </div>
              <div className="pb-12">
                <h1 className="text-5xl font-black py-2">36,700</h1>
                <p className="text-xl text-zinc-400 font-bold">FB live</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Achieved;