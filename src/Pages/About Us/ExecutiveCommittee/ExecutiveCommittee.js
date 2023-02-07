import React from 'react';
import useTitle from '../../../Components/Title/Title';
import rahim from '../../../Assets/Images/EC/129612593_2841791976056491_136278903514988773_n.jpg'
import { Link } from 'react-router-dom';
import SingleEC from './SingleEC';

const ExecutiveCommittee = () => {
    useTitle("Executive Committee")
    return (
      <section className="py-5 bg-blue-50 dark:bg-[#202c4c]  text-black dark:text-white  h-full">
        <div className="   mx-auto xl:w-[1150px] lg:px-12 md:px-28 px-4">
          <div>
            <h1 className="my-5 text-red-600 xl:text-4xl md:text-2xl text-xl font-bold">
              17th Executive Committee of KIN
            </h1>
          </div>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 my-5 sm:grid-cols-2 px-5 gap-7">
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="ইফরাতুল হাসান রাহিম"
              designation="President"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
            <SingleEC
              photo={rahim}
              name="A"
              designation="GS"
              department="Statistics-2017-2018"
              email=''
              phone=''
              linkedIn=''
              facebook=""
            ></SingleEC>
          </div>
        </div>
      </section>
    );
};

export default ExecutiveCommittee;