import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import {  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast from "react-hot-toast";
const SignUp = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelSignUp = (data) => {
    createUser(data.email, data.password)
      .then((Result) => {
        toast.success("Successfully login");

        const user = Result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.log(error));
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="bg-base-100 py-24">
      <div className=" flex justify-center items-center">
        <div className="w-[500px] mx-auto shadow-lg p-5 rounded-md border text-left">
          <h2 className="text-center text-lg font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(handelSignUp)}>
            <div className="mb-4">
              <label>Name</label>
              <input
                {...register("name", {
                  required: "name  is required",
                })}
                className="input input-bordered w-full  "
                type={"text"}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label>Email</label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-full "
                type={"email"}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="my-4">
              <label>Password</label>
              <input
                {...register("password", {
                  required: "At least 8 digit",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "at least one letter, one number and one special character",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters",
                  },
                  message: "password must be strong",
                })}
                className="input input-bordered w-full max-full "
                type={"password"}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="submit"
                className="btn btn-zinc-400 w-full"
                value={"Sign UP"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
