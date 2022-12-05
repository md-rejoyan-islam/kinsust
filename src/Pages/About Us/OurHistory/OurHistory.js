import React from 'react';
import useTitle from '../../../Components/Title/Title';
import Map from './Map/Map';
import map from '../../../Assets/Images/Logo/map.png'
import hand from '../../../Assets/Images/Logo/hand.png'
import { Link } from 'react-router-dom';

const OurHistory = () => {
    useTitle("Our History")
    return (
      <section className=" m-auto pb-5 bg-base-100 dark:bg-slate-800 dark:text-slate-300">
        <div>
          <div>
            <img src={hand} alt="" className="w-screen" />
          </div>
          <div className="lg:w-1/2 m-auto mt-12 px-5 ">
            <div className="text-[15px] font-bold leading-[25px] font-serif text-justify">
              <p className="py-3">
                Keeping the resolution of “আত্নার কাছে দায়বদ্ধতায় হাতে রাখি হাত”
                in heart KIN started its relentless journey in the 30th January
                2003. Since then KIN has been performing many social awareness
                related activities and voluntary activities devotedly. KIN works
                with the its five basis of: KIN School, Blood Donation, Warm
                Cloth Collection and Distribution, Charity and Social Awareness.
                The encouragement and enthusiasm of a group of young dreamer of
                SUST is assisting KIN to reach its ultimate goal.
              </p>
              <p className="py-3">
                KIN School is always alert about the vision of enrolling the
                poor, underprivileged children who are deprived of education
                into the mainstream of education in order to make them stand as
                a deserving, enlightened citizen of the country. Apart from
                their education KIN School also works for the development of
                their characteristic and moral qualities. KIN School discharges
                its teaching activities everyday from 4-5 pm in the room no 131
                IICT Building, SUST.
              </p>
              <p className="py-3">
                KIN arranges blood for the gasping and ill ones by managing
                blood and arranging blood donation program throughout the year.
              </p>
              <p className="py-3">
                Moreover in terms of distributing warm clothes among the
                helpless and forfeited and arranging charity programs to help
                the poor and destitutes KIN is always ahead.
              </p>
              <p className="py-3">
                KIN is also working relentlessly to raise public awareness. It
                also arranges many programs on different important social and
                national days.
              </p>
              <p className="py-3">
                KIN directly been participating in the voluntary activities for
                more than 17 years now. It further dreams of standing beside the
                helpless people and to live on among them for more thousand
                years to come.
              </p>
            </div>

            <div className="my-5">
              <div className="  mx-auto">
                <Link className="mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link className="px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
                <Link className="px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current inline-block"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="place-items-center py-16 m-auto grid grid-cols-12">
              <span className="xl:col-span-2"></span>
              <figure className="col-span-5 xl:col-span-4">
                <img src={map} className="w-[100px]" alt="" />
              </figure>
              <p className="col-span-5 xl:col-span-4">
                Shahjalal University of Science & Technology, Sylhet-3114,
                Bangladesh
              </p>
              <span className=" xl:col-span-2"></span>
            </div>
            <div className="pb-5">
              <Map></Map>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurHistory;