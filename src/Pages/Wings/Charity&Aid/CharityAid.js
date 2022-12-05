import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const CharityAid = () => {
  return (
    <section className=" px-5 m-auto text-justify font-serif text-[17px] py-5 bg-base-100 dark:bg-slate-800 dark:text-slate-300">
      <div className="xl:w-[1100px] mx-auto">
        <div className="my-5">
          <p>
            To help the Poverty-stricken people, “KIN” organizes various charity
            programs ; like- ‘Charity film fest’, ‘Charity poster’, ‘T-shirt ‘,
            ‘Wrist band’, ‘Cake festival’, ‘Book festival’ etc. With the money
            raised from these programs, KIN helps the underprivileged and poor
            people sincerely.
          </p>
        </div>
        <div>
          <PhotoProvider>
            <PhotoView src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-e2b2bc46b8-1024x768.webp">
              <img
                src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-e2b2bc46b8-1024x768.webp"
                alt=""
                className="mx-auto"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="my-5">
          <p>
            In 2021 , KIN organized ‘KIN LUDO Tournament 2021: Roll The Dice To
            Save A Smile‘ and ‘KIN Action Against Hunger 3.0‘.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2020 , ‘বন্যার্তদের আর্তনাদঃ প্রতিস্পন্দনে আমরা’ was held to help
            the flood affected people. Also, ‘KIN PUBG Mobile Tournament: Play
            To Feed A Life’, ‘KIN Action Against Hunger 2.0’, ‘KIN Action
            Against Hunger’ were organized to help people among the Covid-19
            epidemic.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2019 , as a charity program, ‘KIN Book Fair’19’ was organized for
            financial assistance for the the treatment of a poor CNG driver
            epidemic. , who suffered from cancer. The entire dividend of 1 lakh
            tk from the books and T-shirts sold was handed over to him for his
            treatment.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2018 , ‘KIN Charity Film Fest’ and ‘KIN Charity Poster‘ were
            organised. These were organised to save two individual life. The
            charity poster programme included PVC posters, KIN wristbands and
            custom posters for medical assistance of the patient.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2017 , KIN organised ‘KIN Book Fair’, to help a student of
            high-school, who suffered from Leukemia. Total Tk.1 lakh of the
            dividend from seling books, t-shirts and wristbands was handed over
            to his father and other 30,400 Tk was given to help a student of
            SUST.
          </p>
        </div>
        <div className="my-5">
          <p>
            In 2016 , ‘KIN Charity Film Fest’ ; in 2015 , ‘KIN Book Fair’ and
            ‘KIN Charity Film Festival’ were organised. In 2014 , ‘KIN Book
            Fair’ was organised to help a small boy, who suffered from Lung
            Cancer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharityAid;
