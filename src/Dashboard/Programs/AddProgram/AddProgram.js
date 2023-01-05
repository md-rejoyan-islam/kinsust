import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomAlert from "../../../Components/CustomAlert/CustomAlert";

const AddProgram = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();

   const handleProgram = (data, e) => {
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
  

     console.log(data);

     axios
       .post(
         "https://kin-server-side-rejoyanislam.vercel.app/api/v1/program",
         data
       )
       .then((res) => {
         console.log(res);
         if (res.status=== 200) {
          
           toast.custom(<CustomAlert>Successfully Added</CustomAlert>, {
             duration: 1000,
           });
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
            onSubmit={handleSubmit(handleProgram)}
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

            <div className="form-control my-3">
              <label className="label">
                <span className="label-text">Facebook Link</span>
              </label>
              <input
                type="text"
                placeholder="Facebook URL"
                {...register("fb_url", {
                  required: "photo is required",
                })}
                className="border p-3 rounded-md  w-full max-full "
              />
              {errors.fb_url && (
                <p className="text-red-600">{errors.fb_url?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Program Photo Link</span>
              </label>
              <input
                type="text"
                placeholder="Program Photo URL"
                {...register("photo", {
                  required: "photo is required",
                })}
                className="border p-3 rounded-md  w-full max-full "
              />
              {errors.photo && (
                <p className="text-red-600">{errors.photo?.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                className="p-3 rounded-md border-none bg-zinc-600 text-lg text-white"
                type="submit"
              >
                Add Program
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProgram;
