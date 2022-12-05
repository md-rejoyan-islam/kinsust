import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useTitle from "../../Components/Title/Title";

const Post = () => {
  const [post, setPost] = useState([]);
  const [size, setSize] = useState(10);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  useTitle("Post");

  useEffect(() => {
    axios
      .get(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/post?page=${page}&size=${size}`
      )
      .then((res) => {
        setPost(res);
        setCount(res.data.count);
      })
      .catch((error) => console.log(error));
  }, [size, page]);

  return (
    <section className="py-10 px-5 lg:w-[1350px] lg:m-auto">
      <div className="grid lg:grid-cols-2 gap-8 grid-cols-1 justify-center">
        {post.data &&
          post.data.result.map((post, index) => (
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
      </div>
      <div>
        <p>Current page {page}</p> , size {size}
        {[...Array(Math.ceil(count / size)).keys()].map((index) => (
          <button className="btn mx-2" onClick={() => setPage(index)}>
            {index}
          </button>
        ))}
        <select
          onClick={(event) => setSize(event.target.value)}
          className="border border-zinc-300 p-2"
   
        >
      
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"5"}>5</option>
          <option defaultValue={"10"} selected>
            10
          </option>
          <option value={"15"}>15</option>
          <option value={"20"}>20</option>
          <option value={"25"}>25</option>
        </select>
      </div>
    </section>
  );
};

export default Post;
