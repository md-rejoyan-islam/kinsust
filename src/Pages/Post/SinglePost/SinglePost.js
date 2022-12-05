import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillProfile,  } from "react-icons/ai";

const SinglePost = () => {
  const post=useLoaderData()
  const [posts,setPosts]=useState(null)
  
   useEffect(() => {
     fetch(`https://kin-server-side-rejoyanislam.vercel.app/api/v1/post`)
       .then((res) => res.json())
       .then((data) => setPosts(data));
   }, []);
   let data=document.getElementById('para');
  if(data){
    data.innerHTML = post.details;
  }

 
    return (
      <section className="card  bg-zinc-50 shadow-xl rounded-md  mx-auto py-10 px-5">
        <div className="grid lg:grid-cols-12">
          <div className="card-body  m-auto col-span-9">
            <h2 className="card-title font-bold justify-center text-3xl mb-5">
              {post && post.title}
            </h2>
            <img src={post && post.photo} alt="" />
            {/* <p className="text-justify my-2 text-black">{post.details1}</p> */}
            <p id='para' className='my-5 text-lg text-justify'></p>
            
           
           
          </div>
          <div className="hidden lg:block col-span-3 my-5 mx-5 pt-5">
            <h2 className="text-black text-center text-xl font-bold">Release Notes</h2>
            <ul>
              {posts &&
                posts.map((post, index) => (
                  <li className="my-3" key={index}>
                    <div className="flex justify-items-start relative">
                      <AiFillProfile className="text-lg absolute top-1"></AiFillProfile>
                      <Link
                        to={`//kin-server-side.vercel.app/post/${post._id}`}
                        className="hover:text-red-400"
                      >
                        <span className="pl-8 mb-[4px]">{post.title}</span>
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