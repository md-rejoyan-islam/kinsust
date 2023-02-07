import React from 'react';
import { Link } from 'react-router-dom';

const SingleEC = ({photo,name,phone,email,facebook,linkedIn,department,designation}) => {
    return (
      <>
        <div className="mx-auto rounded-md  hover:scale-105 shadow-[4px_-4px_2px_#8686f6,8px_-8px_2px_#60efed] h-fit">
          <div className="  dark:bg-blue-300 bg-blue-200  hover:shadow-md rounded-t-md  pb-2 ">
            <figure>
              <img
                src={photo}
                alt=""
                className=" w-full  h-[200px] mx-auto object-cover  rounded-t-md hover:scale-125"
              />
            </figure>
            <div class="px-4 grid items-center my-3">
              <h1 class="my-1 text-2xl font-bold">{name}</h1>

              <p className="text-xl py-1 font-bold text-[#2a4584]">{designation}</p>
              <p className="text-lg text-zinc-600 font-bold">
               {department}
              </p>
            </div>
          </div>
          <div className="mt-[2px] flex items-center justify-between px-4 bg-blue-300 py-2 rounded-b-md">
            <Link
              to={facebook}
              className="fill-[#2e64e2] bg-[#c1d4ff] rounded-md hover:scale-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </Link>
            <Link className="fill-[#2e64e2] bg-[#c1d4ff] rounded-md hover:scale-150" to={linkedIn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
            </Link>
            <Link className="fill-[#2e64e2] bg-[#c1d4ff] rounded-md hover:scale-150" to={email}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
            </Link>
            <Link className="fill-[#2e64e2] bg-[#c1d4ff] rounded-md hover:scale-150" to={phone}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </>
    );
};

export default SingleEC;