import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Components/Title/Title";
import sharminPhoto from "../../../Assets/Images/advisors/sharmin.jpg";
import amenaPhoto from "../../../Assets/Images/advisors/amena-mam.jpg";
import mohsinPhoto from "../../../Assets/Images/advisors/mohsin.png";
import soyebPhoto from "../../../Assets/Images/advisors/soyab.jpg";
import mazharPhoto from "../../../Assets/Images/advisors/mazhar.jpg";

const Advisors = () => {
  useTitle("Advisors");
  return (
    <section className="py-5 dark:bg-[#202c4c]  text-black dark:text-white bg-[#c8eafd] h-full px-4">
      <div className="py-5  rounded-md mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4">
        <h1 className="xl:text-4xl md:text-2xl text-2xl font-bold py-2">
          Our Honourable Advisors{" "}
        </h1>
        <p className="xl:text-2xl sm:text-lg ">
          KIN is working with the guidance of a group of Honourable teachers of
          SUST
        </p>
      </div>
      <div className="my-5 rounded-md py-5  mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4 grid lg:grid-cols-3 gap-5 sm:grid-cols-2">
        <div className="border rounded-md px-2 py-5 hover:bg-[#bae5fdfb] hover:scale-105  dark:hover:bg-[#11224c88]  border-black ">
          <img
            src={sharminPhoto}
            className="rounded-full py-2 mx-auto w-[200px] h-[200px]"
            alt=""
          />
          <div className="">
            <h1 className="md:text-2xl text-lg pb-3 pt-1 font-bold ">
              Dr. Zayeda Sharmin
            </h1>
            <p className="md:text-[17px]">
              Professor & Head, Department of Political Studies, <br />
              Shahjalal University of Science & Technology
            </p>
            <div className="w-2/3 mx-auto pt-3 grid grid-cols-3 justify-items-center ">
              <Link
                to="//www.sust.edu/d/pss/faculty-profile-detail/419"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] h-fit dark:hover:bg-[#ff338c]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
              </Link>
              <a
                href="mailto:zsharmin-psa@sust.edu"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </a>
              <a
                href="tel:15.118.229.78"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className=" hover:scale-105  border rounded-md px-2 py-5 hover:bg-[#bae5fdfb] dark:hover:bg-[#11224c88]  border-black ">
          <img
            src={amenaPhoto}
            className="rounded-full py-2 mx-auto w-[200px] h-[200px]"
            alt=""
          />
          <div>
            <h1 className="md:text-2xl text-lg pb-3 pt-1 font-bold ">
              Amina Pervin
            </h1>
            <p className="md:text-[17px]">
              Professor, Department of Social Work, <br /> Shahjalal University
              of Science and Technology
            </p>
            <div className="w-2/3 mx-auto pt-3 grid grid-cols-3 justify-items-center">
              <Link
                to="//www.sust.edu/d/scw/faculty-profile-detail/450"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
              </Link>
              <a
                href="mailto:apervin-scw@sust.edu"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </a>
              <a
                href="tel:+8801712375748"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hover:scale-105  border rounded-md px-2 py-5 hover:bg-[#bae5fdfb] dark:hover:bg-[#11224c88]  border-black ">
          <img
            src={mohsinPhoto}
            className="rounded-full py-2 mx-auto w-[200px] h-[200px]"
            alt=""
          />
          <div>
            <h1 className="md:text-2xl text-lg pb-3 pt-1 font-bold ">
              Dr. Mohammad Muhshin Aziz Khan
            </h1>
            <p className="md:text-[17px]">
              Professor, Department of Industrial and Production Engineering,{" "}
              <br />
              Shahjalal University of Science and Technology
            </p>
            <div className="w-2/3 mx-auto pt-3 grid grid-cols-3 justify-items-center">
              <Link
                to="//www.sust.edu/d/ipe/faculty-profile-detail/313"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
              </Link>
              <a
                href="mailto:muhshin-ipe@sust.edu"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </a>
              <a
                href="tel:14.36.20.69"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className=" hover:scale-105  border rounded-md px-2 py-5 hover:bg-[#bae5fdfb] dark:hover:bg-[#11224c88]  border-black ">
          <img
            src={mazharPhoto}
            className="rounded-full py-2 mx-auto w-[200px] h-[200px]"
            alt=""
          />
          <div>
            <h1 className="md:text-2xl text-lg pb-3 pt-1 font-bold ">
              A K M Mazharul Islamn
            </h1>
            <p className="md:text-[17px]">
              Professor, Department of Anthropology,
              <br />
              Shahjalal University of Science and Technology
            </p>
            <div className="w-2/3 mx-auto pt-3 grid grid-cols-3 justify-items-center">
              <Link
                to="//www.sust.edu/d/ipe/faculty-profile-detail/313"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
              </Link>
              <a
                href="mailto:muhshin-ipe@sust.edu"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </a>
              <a
                href="tel:14.36.20.69"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hover:scale-105 border rounded-md px-2 py-5 hover:bg-[#bae5fdfb] dark:hover:bg-[#11224c88]  border-black ">
          <img
            src={soyebPhoto}
            className="rounded-full py-2 mx-auto w-[200px] h-[200px]"
            alt=""
          />
          <div>
            <h1 className="md:text-2xl text-lg pb-3 pt-1 font-bold ">
              Mohammad Abdullah-Al-Shoeb
            </h1>
            <p className="md:text-[17px]">
              Associate Professor, Department of Biochemistry and Molecular
              Biology,
              <br />
              Shahjalal University of Science and Technology
            </p>
            <div className="w-2/3 mx-auto pt-3 grid grid-cols-3 justify-items-center">
              <Link
                to="//www.sust.edu/d/ipe/faculty-profile-detail/313"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                  <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                </svg>
              </Link>
              <a
                href="mailto:muhshin-ipe@sust.edu"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </a>
              <a
                href="tel:14.36.20.69"
                className="dark:fill-white bg-[#93d8fdfb] w-fit p-1 rounded-md dark:bg-[#11224c] hover:bg-[#ff338c] dark:hover:bg-[#ff338c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisors;
