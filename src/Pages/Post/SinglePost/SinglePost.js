import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import skeleton from "../../../Assets/Images/skeleton/skeletok.gif";

const SinglePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let post = useLoaderData();

  const {
    data: posts = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch(`https://kin-server-side-rejoyanislam.vercel.app/api/v1/post`).then(
        (res) => res.json()
      ),
  });

  // if(isFetching){
  //   return <div> <img src={skeleton} className='w-full' alt="" /></div>
  // }

  let postData = document.getElementById("para");
  let postData2 = document.getElementById("para2");
  let postData3 = document.getElementById("para3");
  let subTitle = document.getElementById("subTitle");

  if (postData) {
    if (post.sub_title) {
      subTitle.innerHTML = post.sub_title;
    }
  }
  if (postData) {
    if (post.details) {
      postData.innerHTML = post.details;
    }
  }
  if (postData) {
    if (post.details2) {
      postData2.innerHTML = post.details2;
    }
  }
  if (postData) {
    if (post.details3) {
      postData3.innerHTML = post.details3;
    }
  }

  const [size, setSize] = useState(2);
  const [full, setFull] = useState("notFull");
  const handelLogin = (data, e) => {
    const addComment = post.comment;

    const time = {};
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();
    const publish = date.getDate();
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    time.day = dayName[day];
    time.month = monthName[month];
    time.date = date;
    time.year = year;
    time.publish = publish;

    data.time = time;
    addComment.push(data);

    axios
      .put(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/post/${post._id}`,
        addComment
      )
      .then((res) => {
        if (res.statusText === "OK") {
          toast.success("Comment Done");
          e.target.reset();
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };
  const showAll = () => {
    setSize(post.comment.length);
    setFull("full");
  };
  const hide = () => {
    setFull("notFull");
    setSize(2);
  };
  console.log(post);
  return (
    <section className="card   shadow-xl rounded-none  mx-auto">
      <div className="grid lg:grid-cols-12 dark:bg-[#0f172ad9] w-full">
        <div className="dark:bg-[#0f172a] dark:text-zinc-200 w-full  m-auto col-span-9 py-5 lg:px-16 md:px-8 px-3">
          <div>
            <h2 className="card-title font-bold justify-center text-3xl mb-5">
              {post && post?.title}
            </h2>
            <p className="mb-5 text-lg font-medium " id="subTitle"></p>

            <p id="para" className="my-5 text-lg text-justify"></p>
            <figure>
              <img src={post && post?.photo} className="w-full" alt="" />
            </figure>
            <p id="para2" className="my-5 text-lg text-justify"></p>
            <p id="para3" className="my-5 text-lg text-justify"></p>
          </div>
          {/* comment section */}

          <div className="bg-sky-100 dark:bg-[#2934536b] py-8 rounded-md text-left ">
            <div className="mb-5 w-2/3 mx-auto">
              <h2 className=" font-bold pb-3 ">
                {post.comment.length > 0 && "Comments :"}
              </h2>
              {post?.comment &&
                [...post.comment].reverse()
                  .slice(0, size)
                  .map((com, index) => (
                    <div
                      key={index}
                      className="mb-3 bg-[#64c8e70e] rounded-md p-2"
                    >
                      <p className="">
                        <span className="text-[#d9dcddd4] font-black">
                          {com?.name}
                        </span>{" "}
                        <span className=" text-[#ffffff8a]">
                          {" "}
                          {`<${com?.email}>`}{" "}
                          <span className="text-[13px] px-2">
                            {com?.time?.publish} {com?.time?.month},{" "}
                            {post?.time?.year}
                          </span>
                        </span>
                      </p>
                      <p className="">{com?.comment}</p>
                    </div>
                  ))}
              {full === "full" && (
                <button
                  className=" dark:bg-[#ffffff2b] dark:text-[#ffffff8a] py-2 px-2 rounded-md"
                  onClick={hide}
                >
                  Hide
                </button>
              )}
              {full === "notFull" && post.comment.length > 0 && (
                <button
                  className=" dark:bg-[#ffffff2b] dark:text-[#ffffff8a] py-2 px-2 rounded-md"
                  onClick={showAll}
                >
                  See More
                </button>
              )}
            </div>

            <div className="w-2/3 mx-auto">
              <form onSubmit={handleSubmit(handelLogin)}>
                <h1 className="font-bold mb-3">Type Your Comment :</h1>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full dark:bg-[#ffffff2b] rounded-md p-3 "
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-left">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full dark:bg-[#ffffff2b]  rounded-md p-3 "
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-left text-red-600">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    className="w-full dark:bg-[#ffffff2b] rounded-lg p-3"
                    rows={"4"}
                    placeholder="Type Your comment . . ."
                    {...register("comment", {
                      required: "Comment can not be Empty",
                    })}
                  ></textarea>
                  {errors.comment && (
                    <p className="text-red-600 text-left">
                      {errors.comment?.message}
                    </p>
                  )}
                </div>
                <div className="pt-2 text-left">
                  <input
                    type="submit"
                    value="Submit comment"
                    className=" dark:bg-[#ffffff2b] dark:text-[#ffffff8a] bg-green-200 p-3 btn border-none text-black hover:text-white hover:bg-zinc-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-3  px-5 pt-5 dark:bg-[#0f172ad9] dark:text-zinc-200">
          <h2 className=" text-center text-xl font-bold">Release Notes</h2>
          <ul>
            {posts?.result?.length > 0 &&
              posts?.result?.map((post, index) => (
                <li className="my-3" key={index}>
                  <div className="flex justify-items-start relative  ">
                    <AiFillProfile className="text-lg absolute top-1"></AiFillProfile>
                    <Link
                      to={`//kin-server-side.vercel.app/post/${post._id}`}
                      className=" hover:text-red-400"
                    >
                      <span className="pl-8 pb-[4px]">{post.title}</span>
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
