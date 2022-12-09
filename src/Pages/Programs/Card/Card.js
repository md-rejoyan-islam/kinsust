import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Card.css'
const Card = () => {
    return (
      <div className="card card-compact   bg-base-200 shadow-xl rounded-md">
        <div className="box">
          <div className="ribbon">
            <span>2022</span>
          </div>
        </div>
        <figure>
          <img
            className="img w-full h-[180px]"
            src="https://kinsust.org/wp-content/uploads/2022/11/KINbookfair2022-768x432.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center pt-2">KIN বই উৎসব ২০২২ </h2>
          <div className="my-3">
            <NavLink
              to={
                "//kinsust.org/wp-content/uploads/2022/02/ezgif-1-368256298b-e1644699059330.webp"
              }
              target={"_blank"}
              className="px-2 py-2 font-bold rounded-md text-lg bg-[#1e293bc1]  text-[#fff] border-none hover:bg-zinc-600 hover:text-black"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Card;