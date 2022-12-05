import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddPost = () => {




     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();

     const handlePost = (data, e) => {
const replaceData = data.details.replaceAll("\n", "<br>");
data.details = replaceData;
const time = {};
const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDay();
const publish=date.getDate()
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
data.time=time;

console.log(data)






       axios
         .post(
           "https://kin-server-side-rejoyanislam.vercel.app/api/v1/post",
           data
         )
         .then((res) => {
           console.log(res);
           if (res.statusText === "OK") {
             toast.success("Successfully Added");
             e.target.reset();
           }
         })
         .catch((error) => console.log(error));
     };
    return (
      <section>
        <div className="my-20 ">
          <div className="card-body text-left rounded-md mx-auto md:w-[500px] bg-white">
            <form
              onSubmit={handleSubmit(handlePost)}
              // action="http://localhost:5002/image"
              // method="post"
              // encType="multipart/form-data"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <textarea
                  type="text"
                  rows={"4"}
                  {...register("title", {
                    required: "Title is required",
                  })}
                  className="border p-3 rounded-md border-zinc-300 w-full max-full "
                />
                {errors.title && (
                  <p className="text-red-600">{errors.title?.message}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <textarea
                  type="text"
                  rows={"10"}
                  {...register("details", {
                    required: "Details is required",
                  })}
                  className="border p-3 rounded-md border-zinc-300 w-full max-full "
                />
                {errors.details && (
                  <p className="text-red-600">{errors.details?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Photo Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Slider Link"
                  {...register("photo", {
                    required: "photo is required",
                  })}
                  className="border p-3 rounded-md  w-full max-full "
                />
                {errors.photo && (
                  <p className="text-red-600">{errors.photo?.message}</p>
                )}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="Photo"
                  {...register("photo", {
                    required: "Photo is required",
                  })}
                  className="input input-bordered w-full max-full "
                />
                {errors.photo && (
                <p className="text-red-600">{errors.photo?.message}</p>
              )}
              </div> */}
              <div className="form-control mt-6">
                <button
                  className="p-3 rounded-md border-none bg-zinc-600 text-lg text-white"
                  type="submit"
                >
                  Add Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default AddPost;