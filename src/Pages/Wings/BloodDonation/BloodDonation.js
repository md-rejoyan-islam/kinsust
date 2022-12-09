import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const BloodDonation = () => {
  
    return (
      <section className=" px-5 m-auto text-justify font-serif text-[17px] py-5 bg-[#e6f0f6]  dark:bg-slate-800 dark:text-slate-300">
        <div className="xl:w-[1100px] mx-auto">
          <div className="my-5">
            <p>
              Blood Sector is one of the five wings of KIN. As the first word of
              the Slogan of KIN says Respond, Blood Sector makes it meaningful.
              The Blood Sector works with jurisdictions to determine the
              clinical requirements for Blood. We negotiate and manage to
              contract with the donors. We try our best to manage Blood ASAP
              after getting the call from recipient. At that point, we contact
              with various donors and attempt to cause them to comprehend the
              circumstance to persuade them to donate Blood.
            </p>
          </div>
          <div>
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-3e95f1b962-1024x652.webp">
                <img
                  src="https://kinsust.org/wp-content/uploads/2022/02/ezgif-7-3e95f1b962-1024x652.webp"
                  alt=""
                  className="mx-auto"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="my-10">
            <p>
              As someone agrees to donate Blood, we then link up him/her with
              the recipient. We try to promote Safe, High-quality management and
              use of Blood. We meet patient needs for the provision of a safe,
              secure, adequate and affordable supply of blood. To improve the
              blood supply we also organize programs like “Blood Donation Camp”
              , “Blood Donor’s Hunt” that helps to develop and facilitate
              strategies. We try to enhance the sustainability and affordability
              of the supply of blood. KIN is rewarded as the Highest Blood
              Donating Organization for 8 times in a row in the Sylhet Division
              by “Sandhani” ,“SOMC” .
            </p>
          </div>
        </div>
      </section>
    );
};

export default BloodDonation;