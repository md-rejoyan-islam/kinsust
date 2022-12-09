import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const WinterClothDistribution = () => {
    return (
      <section className=" px-5 m-auto text-justify font-serif text-[17px] py-5 bg-[#e6f0f6] dark:bg-slate-800 dark:text-slate-300">
        <div className="xl:w-[1100px] mx-auto">
          <div className="my-5">
            <p>
                “KIN” organizes ‘Winter Cloth Collection and Distribution
              Program’ every year to stand with the helpless and impoverished
              people from the severity of cold in Winter. Donation collection,
              Warm cloth collection and distribution, KIN charity hoodie are the
              main features of this program. The main reason behind this program
              is to spread the warmth and put a smile on the face of needy
              people.{" "}
            </p>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center">
              Winter Cloth Collection and Distribution Program 2021
            </p>
            <p>
              In 2021, this program was held in ward no.2-Doara bazar-West
              Machimpur- Chhatak, in KIN School, in Tarapur Tea Estate, among
              the poor people near SUST and among the homeless people living in
              the railway station, Shahjalal Mazar and on the sidewalks of the
              Sylhet city. Blankets were distributed among about 190 families
              and winter clothes were distributed among about 400 people,
              including students of KIN School.
            </p>
          </div>

          <div className="my-5">
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-ca92bf3e91.webp">
                <img
                  src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-ca92bf3e91.webp
            "
                  alt=""
                  className="mx-auto"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center my-4">
              Winter Cloth Collection and Distribution Program 2020
            </p>
            <p>
              In 2020, Winter clothing and financial donations were collected
              from about 16 districts of the country for this program. These
              winter clothes were distributed among the helpless people of
              different parts of the country including Noakhali Companiganj,
              Rangamati Taimidang, Sirajganj, Sherpur, Srimangal, Mymensingh,
              Laxmipur, Sunamganj, Daldali Tea Garden etc. A total of 422
              blankets, 2259 winter clothes, 349 ordinary clothes were
              distributed among the poor people and 135 hoodies were distributed
              among the students of KIN School and Padmu Primary School situated
              at Ujanipara, Bandarban.
            </p>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center my-4">
              Winter Cloth Collection and Distribution Program 2019
            </p>
            <p>
              In 2019, Blankets were distributed among 104 families of
              Keorachhara Tea Garden in Sylhet and winter clothes and petroleum
              jelly were distributed among 90 students of KIN School.
            </p>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center my-4">
              Winter Cloth Collection and Distribution Program 2018
            </p>
            <p>
              In 2018, Winter clothes and blankets were distributed at Daldali
              Tea Garden of Shahi Idgah, in School, 5 villages of Dargapasha
              Upazila of Sunamganj and among the students of KIN school.
              Blankets were distributed to School, 216 poor families, winter
              clothes and general cloths to 500 people and winter clothes and
              petroleum jelly were distributed to School, 95 students of KIN
              School.
            </p>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center my-4">
              Winter Cloth Collection and Distribution Program 2017
            </p>
            <p>
              In 2017, winter clothes were distributed at Palash union of
              Bishambhpur upazila of Sunamganj district, railway station of
              Sylhet, Bandar, Kin Bridge, Zindabazar and Chauhatta areas. Around
              School, 220 winter clothes were distributed at Railway Station,
              Bandar, Kin Bridge, Zindabazar and Chauhatta areas and more winter
              clothes were distributed among School, 100 students of KIN School.
            </p>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center my-4">
              Winter Cloth Collection and Distribution Program 2015
            </p>
            <p>
              In this year, total 2200 warm clothes were distributed in Lalakhal
              Tea State,Jaintapur and among the students of KIN School.
            </p>
          </div>
          <div className="my-10">
            <p className="font-bold text-xl text-center my-4">
              Winter Cloth Collection and Distribution Program 2014
            </p>
            <p>
              In 2014, 160 winter clothes were distributed in Taraganj of
              Rangpur and School, 200 winter clothes were distributed among the
              students of KIN School.
            </p>
          </div>
        </div>
      </section>
    );
};

export default WinterClothDistribution;