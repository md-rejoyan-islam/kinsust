import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomAlert from "../../../Components/CustomAlert/CustomAlert";

const AddSlider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const handelLogin = (data,e) => {
    axios
      .post(
        "https://kin-server-side-rejoyanislam.vercel.app/api/v1/slider",
        data
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.custom(<CustomAlert>successfully Added</CustomAlert>, {
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
            onSubmit={handleSubmit(handelLogin)}
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
                <span className="label-text">Slider Link</span>
              </label>
              <input
                type="text"
                placeholder="Slider Link"
                {...register("link", {
                  required: "Link is required",
                })}
                className="border p-3 rounded-md  w-full max-full "
              />
              {errors.link && (
                <p className="text-red-600">{errors.link?.message}</p>
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
                Add Program
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddSlider;
