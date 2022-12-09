import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useTitle from '../../Components/Title/Title';

import "./Card/Card.css";

const Programs = () => {
    useTitle("Programs")

    const { data: programs = [], refetch } = useQuery({
      queryKey: ["programs"],
      queryFn: () =>
        fetch(
          `https://kin-server-side-rejoyanislam.vercel.app/api/v1/program`
        ).then((res) => res.json()),
    });
    console.log(programs[0]);
    return (
      <section className=" dark:bg-[#0f172a] bg-[#e0f2fe8d]">
        <div className="py-10 px-5 xl:w-[1350px] lg:m-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center grid-cols-1 overflow-hidden">
            {programs.map((program) => (
              <div className="card card-compact   bg-base-200 shadow-xl rounded-md">
                <div className="box">
                  <div className="ribbon">
                    <span>{program?.time.year}</span>
                  </div>
                </div>
                <figure>
                  <img
                    className="w-full img h-[220px]"
                    src={program?.photo}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-2xl font-bold text-center pt-2">
                    {program.title}
                  </h2>
                  <div className="my-3">
                    <div className="card-actions justify-center w-full">
                      <NavLink
                        to={program?.fb_link}
                        target={"_blank"}
                        className="w-full btn dark:bg-[#a668cf8e] border-none dark:text-white text-white bg-[#1e293bc1] py-3"
                      >
                        Learn More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Programs;