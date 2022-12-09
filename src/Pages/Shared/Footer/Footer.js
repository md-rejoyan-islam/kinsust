import React from "react";
import { Link, NavLink } from "react-router-dom";
import kinLogo from "../../../Assets/Images/Logo/kin-logo-01.png";

const Footer = () => {
  return (
    <section className="bg-[#1e293b] dark:bg-[#1e2c45] ">
      <footer className="2xl:w-[1500px] mx-auto footer py-6 px-3 text-base-content xl:w-5/6 m-auto place-items-center">
        <div className="text-white place-items-center">
          <span className="p-2">
            <img src={kinLogo} alt="" className="w-[200px]" />
          </span>
          <Link className="link link-hover ">
            'আত্নার কাছে দায়বদ্ধতায় হাতে রাখি হাত'
          </Link>
          <p>© 2021 KIN copyright, all rights reserved.</p>
        </div>
        <div className="text-white place-items-center">
          <span className="text-yellow-200  font-bold">EXPLORE</span>
          <Link className="link link-hover">Our History</Link>
          <Link className="link link-hover">Campaigns</Link>
          <Link className="link link-hover">Media</Link>
          <Link className="link link-hover">Executive Committee</Link>
          <Link to={"/faq"} className="link link-hover">
            FAQ
          </Link>
        </div>
        <div className="text-white place-items-center">
          <span className=" text-center text-yellow-200 font-bold">
            CONTACT
          </span>
          <a href="tel:+8801641830969" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-yellow-200 w-6 h-6 inline-block mx-1 p-[3px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +8801641830969
          </a>
          <a className="" href={"mailto: kinsust03@gmail.com"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-yellow-200 h-6 inline-block mx-1 p-[3px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            kinsust03@gmail.com
          </a>
          <a
            href="https://goo.gl/maps/x35EyojkSbMZY3rh7"
            target={"_blank"}
            className=" link link-hover   "
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4356951135023!2d91.8297245149421!3d24.91722318402719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750556002144eab%3A0xe277e14dbca9f2ab!2sShahjalal%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1670531647343!5m2!1sen!2sbd"
              width="800"
              height="600"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor "
              className="w-6 h-6  text-yellow-200   inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="px-1">
              Shahajalal University of Science & Techology, <br />
              Sylhet-3114,Bangladesh
            </span>
          </a>
          <Link className="link link-hover">Executive Committee</Link>
          <Link to={"/faq"} className="link link-hover">
            FAQ
          </Link>
        </div>

        <div className="text-white place-items-center">
          <span className="text-yellow-200  font-bold">FOLLOW US</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/"
              target="_blank"
            >
              <i className="text-xl fa-brands fa-linkedin text-[#ffffffef]"></i>
            </a>
            <a href="https://www.youtube.com/@kinsust3885" target={"_blank"}>
              <i className="text-xl fa-brands fa-youtube text-[#f70000c3]"></i>
            </a>
            <a href={"//www.facebook.com/KINSUST"} target="_blank">
              <i className="text-xl fa-brands fa-facebook text-[#ffffffef]"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
