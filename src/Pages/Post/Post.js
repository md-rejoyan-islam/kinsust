import { useQuery } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useTitle from "../../Components/Title/Title";

const Post = () => {
  const [size, setSize] = useState(9);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  useTitle("Post");

  const {
    data: post = [],
    refetch,
  } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/post?page=${page}&size=${size}`
      ).then((res) => res.json()),
  });

useEffect(() => {
  if(post.count){
setCount(post.count);
  }
  refetch();
}, [size, refetch, page,post.count]);


//  if (isFetching) {
//    return (
//      <div>
//        {" "}
//        <img src={skeleton} className="w-full" alt="" />
//      </div>
//    );
//  }

const post_title=document.getElementById("post_details");
if(post_title){
  post_title.innerHTML=''
}

  return (
    <section className="   dark:bg-[#0f172a] bg-[#e0f2fe]">
      <main className="xl:w-[1280px] py-10 px-5 lg:m-auto">
        <div className="grid xl:grid-cols-3 gap-8 md:grid-cols-2 justify-center">
          {post?.result &&
            [...post.result].reverse().map((post, index) => (
              <div
                key={index}
                className=" card  shadow-xl dark:bg-[#293548] dark:text-[#bfc9d7] bg-[#ffffffa2]"
              >
                <h2 className="text-xl font-bold py-4 dark:text-slate-200 px-4">
                  {post?.title}
                </h2>
                <p className="pb-5 px-4" id="post_details">
                  {post.details
                    .slice(1, 100)
                    .replaceAll("<br>", "")
                    .replaceAll("br>", "")}
                </p>
                <figure>
                  <img
                    src={post?.photo}
                    alt="Shoes"
                    className="w-fit h-[200px]"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-center w-full">
                    <NavLink
                      to={`//kin-server-side.vercel.app/post/${post?._id}`}
                      className="w-full btn btn-primary dark:bg-[#a668cf8e] border-none dark:text-white text-white bg-[#1e293bc1]"
                    >
                      Details
                    </NavLink>

                    <p className="text-left">
                      Published Date: {post?.time?.day} &nbsp;
                      {post?.time?.publish} {post?.time?.month} &nbsp;
                      {post?.time?.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-8 grid-cols-1 justify-center">
          {post.result &&
            post.result.map((post, index) => (
              <div className=" " key={index}>
                <div className="hero bg-base-200 rounded-md">
                  <div className="hero-content flex-col lg:flex-row justify-center">
                    <figure className="lg:w-1/2 w-full mx-auto justify-center">
                      <img
                        src={post?.photo}
                        className="rounded-lg mx-auto shadow-2xl h-[250px] w-[400px]"
                        alt=""
                      />
                    </figure>
                    <div className="lg:w-1/2">
                      <h1 className="text-3xl font-bold">{post?.title}</h1>
                      <p className="py-6">{post.details.slice(1, 100)}</p>
                      <p>
                        Publish Date: {post?.time?.day} &nbsp;
                        {post?.time?.publish} {post?.time?.month} &nbsp;
                        {post?.time?.year}
                      </p>
                      <NavLink
                        to={`//kin-server-side.vercel.app/post/${post?._id}`}
                        className="btn btn-outline my-2"
                      >
                        Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div> */}
        <div className="pt-4">
          {[...Array(Math.ceil(count / size)).keys()].map((index, key) => (
            <button
              key={key}
              className="btn mx-2"
              onClick={() => setPage(index)}
            >
              {index+1}
            </button>
          ))}
          <select
            onClick={(event) => setSize(event.target.value)}
            className="border  input border-zinc-300 bg-slate-400 p-2"
            name="select"
          >
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"6"}>6</option>
            <option defaultValue={"9"} selected>
              9
            </option>
            <option value={"15"}>15</option>
            <option value={"20"}>20</option>
            <option value={"25"}>25</option>
          </select>
        </div>
      </main>
    </section>
  );
};

export default Post;
