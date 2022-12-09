import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SocailAwarness = () => {
    return (
      <section className=" px-5 m-auto text-justify font-serif text-[17px] py-5 bg-[#e6f0f6]  dark:bg-slate-800 dark:text-slate-300">
        <div className="xl:w-[1100px] mx-auto">
          <div className="my-5">
            <p>
              KIN started it’s own journey to spread awareness among people.
              Since then, keeping that goal in mind, KIN is constantly working
              to increase social awareness among the general people. KIN
              organizes various awarness programmes on important national and
              international days, e.g. Children’s day, Labour day, Mental health
              day,Blood donar day, Environment day, International mother
              language day, Independence day, victory day etc. KIN also protests
              against the various injustices that are happening around us.
            </p>
          </div>
          <div>
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-83a7bc182d-1024x557.webp">
                <img
                  src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-83a7bc182d-1024x557.webp"
                  alt=""
                  className="mx-auto"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="my-5">
            <p>
              For Example- KIN protested against sexual violence occured at TSC
              on 1st Baishakh of 1422 BS and also against all sexual harassment
              that took place before and after that, by organizing human chain
              and rally in students of SUST in 2019 .
            </p>
          </div>
          <div className="my-5">
            <p>
              KIN also organised a protest programme ‘চলো আওয়াজ তুলি’ against
              all Eve-teasing, sexual harassments and rapists in 2015 . Such
              protest programmes were also held in 2015 and in 2014 against
              various injustices happening around us.
            </p>
          </div>
        </div>
      </section>
    );
};

export default SocailAwarness;