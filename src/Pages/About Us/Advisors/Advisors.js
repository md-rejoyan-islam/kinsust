import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Components/Title/Title";
import sharminPhoto from "../../../Assets/Images/advisors/sharmin.jpg";
import amenaPhoto from "../../../Assets/Images/advisors/amena-mam.jpg";
import mohsinPhoto from "../../../Assets/Images/advisors/mohsin.png";
import soyebPhoto from "../../../Assets/Images/advisors/soyab.jpg";
import mazharPhoto from "../../../Assets/Images/advisors/mazhar.jpg";
import SingleAdvisor from "./SingleAdvisor";

const Advisors = () => {
  useTitle("Advisors");
  return (
    <section className="py-5 bg-[#e6f0f6] dark:bg-[#202c4c]  text-black dark:text-white  h-full px-4">
      <div className="py-5  rounded-md mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4">
        <h1 className="xl:text-4xl md:text-2xl text-2xl font-bold py-2">
          Our Honourable Advisors{" "}
        </h1>
        <p className="xl:text-2xl sm:text-lg ">
          KIN is working with the guidance of a group of Honourable teachers of
          SUST
        </p>
      </div>
      <div className="my-5 rounded-md py-5  mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4 grid lg:grid-cols-3 gap-20 sm:grid-cols-2">
        
        <SingleAdvisor
          name=" Dr. Zayeda Sharmin"
          photo={sharminPhoto}
          designation="Professor & Head, Department of Political Studies"
          email="mailto:zsharmin-psa@sust.edu"
          phone="tel:15.118.229.78"
          link="//www.sust.edu/d/pss/faculty-profile-detail/419"
        ></SingleAdvisor>

        <SingleAdvisor
          name=" Amina Pervin"
          photo={amenaPhoto}
          designation="Professor, Department of Social Work"
          email="mailto:apervin-scw@sust.edu"
          phone="tel:+8801712375748"
          link="//www.sust.edu/d/scw/faculty-profile-detail/450"
        ></SingleAdvisor>

        <SingleAdvisor
          name="  Dr. Mohammad Muhshin Aziz Khan"
          photo={mohsinPhoto}
          designation="Professor, Department of Anthropology"
          email="mailto:muhshin-ipe@sust.edu"
          phone="tel:14.36.20.69"
          link="//www.sust.edu/d/ipe/faculty-profile-detail/313"
        ></SingleAdvisor>

        <SingleAdvisor
          name="  A K M Mazharul Islamn"
          photo={mazharPhoto}
          designation="Professor, Department of Anthropology"
          email="mailto:muhshin-ipe@sust.edu"
          phone="tel:14.36.20.69"
          link="//www.sust.edu/d/ipe/faculty-profile-detail/313"
        ></SingleAdvisor>

        <SingleAdvisor
          name="Mohammad Abdullah-Al-Shoeb"
          photo={soyebPhoto}
          designation="Associate Professor, Department of Biochemistry and Molecular
                Biology"
          email="mailto:muhshin-ipe@sust.edu"
          phone="tel:14.36.20.69"
          link="//www.sust.edu/d/ipe/faculty-profile-detail/313"
        ></SingleAdvisor>
      </div>
    </section>
  );
};

export default Advisors;
