import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./Slider.css";
import SwiperCore, { Autoplay } from "swiper";
// import required modules
import { Pagination, EffectCoverflow } from "swiper";
const Slider = () => {
  // const [dark, setDark] = useState(localStorage.getItem("mood"));

  // useEffect(() => {
  //   const darkBtnChange = document.getElementById("darkBtnChange");
  //   darkBtnChange.onclick = () => {
  //     if (localStorage.getItem("mood") === "dark") {
  //       setDark("light");
  //     }
  //     if (localStorage.getItem("mood") === "light") {
  //       setDark("dark");
  //     }
  //   };
  // }, []);
  SwiperCore.use([Autoplay]);
  return (
    <section className="">
      <div className="max-w-screen-2xl mx-auto">
        <Swiper
          className="dark:bg-zinc-800 bg-slate-300"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          // slidesPerView={1}
          // spaceBetween={30}
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
          }}
          speed={1000}
          // grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          // modules={[
          //   Pagination,
          //   Navigation,
          //   FreeMode,
          //   EffectFade,
          //   Mousewheel,
          //   Keyboard,
          // ]}
          // className="mySwiper"
        >
          <SwiperSlide className="relative ">
            <img
              src="https://kinsust.org/wp-content/uploads/2021/05/11411996_1022380621120353_8193918635970202661_o.jpg"
              alt=""
              className=" to-transparent"
            />
            <p
              className=" absolute left-0 lg:top-[80%] top-[70%] right-0 mx-auto "
              style={{ opacity: "0.5" }}
            >
              <span className="bg-black text-white text-2xl">
                Literacy is a bridge from misery to hope
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://kinsust.org/wp-content/uploads/2021/05/10749969_903365219688561_6514843395615571952_o.jpg"
              alt=""
            />
            <p
              className=" absolute left-0 lg:top-[80%] top-[70%] right-0 mx-auto "
              style={{ opacity: "0.5" }}
            >
              <span className="bg-black text-white text-2xl">
                Literacy is a bridge from misery to hope
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://kinsust.org/wp-content/uploads/2021/05/16422861_1545885018769908_8780378111676736818_o.jpg"
              alt=""
            />
            <p
              className=" absolute left-0 lg:top-[80%] top-[70%] right-0 mx-auto "
              style={{ opacity: "0.5" }}
            >
              <span className="bg-black text-white text-2xl">
                Education is the key to unlocking other human rights
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://kinsust.org/wp-content/uploads/2021/05/photo6170088535432997804.jpg"
              alt=""
            />
            <p
              className=" absolute left-0 lg:top-[80%] top-[70%] right-0 mx-auto "
              style={{ opacity: "0.5" }}
            >
              <span className="bg-black text-white text-2xl">
                It’s good to be blessed. It’s better to be a blessing
              </span>
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
