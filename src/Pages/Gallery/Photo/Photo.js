import React from 'react';
import useTitle from '../../../Components/Title/Title';

const Photo = () => {
    useTitle("Photo")
    return (
      <section className="py-5 dark:bg-[#202c4c]  text-black dark:text-white bg-[#c8eafd] h-full">
        <div className="md:py-5  grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto xl:w-[1150px] lg:px-12 md:px-28 px-4">
          <div>
            <img
              src="https://drive.google.com/uc?id=1rV5Tl8IYCj8B8hGJ9o1-oDg54UwuBHt2"
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=13BA_9NjAX4HQFz_Ew8QXycMfpmLRqAvD"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=19a5N9mnnkRB7wOsbx-N-fa21NB7vvuUT"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=1uVZV5JbU0RKrPYbXT2VSzx5xf5Dsooqo"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=1GKbhVyQ-zmN_iOFCCccY6kdpnKJRBVhe"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=11Eht7saKjtK763s5FHSZ1A4SA5pyiuEI"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=14CAwr-3B48bR8rLsvyh39Mjn1T1fEaBD"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=1JoP55TNfb4E37G31Q83YlASuzrAteaFc"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=11cZB9V13Dg7MiHCsaamR5Mx6y4PqOTIm"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=1fCaSNMDAM8KO09s6q6WQbC8LGAg8xyXE"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
          <div>
            <img
              src="https://drive.google.com/uc?id=1hHRPtaH52JSHIJH8I_Sg7dusXj1QMqlF"
              alt=""
              className="rounded-md border-4 hover:scale-110 border-zinc-600 h-full"
            />
          </div>
        </div>
      </section>
    );
};

export default Photo;