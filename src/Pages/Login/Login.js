import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import toast from "react-hot-toast";
import useTitle from "../../Components/Title/Title";

const Login = () => {
  useTitle('login') 
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState("");
  const { signInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    console.log(data);
    setLogInError("");
    signInUser(data.email, data.password)
      .then((result) => {
        toast.success("Successfully login");
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        setLogInError(error.message);
        console.log(error);
      });
    console.log(data);
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="w-[500px] mx-auto shadow-lg p-5 rounded-md border text-left">
        <h2 className="text-center text-lg font-bold">login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
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
          <div className="mb-4">
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
            <span className="text-sm">
              <Link>Forgot Password?</Link>
            </span>
          </div>
          <input
            type="submit"
            className="btn btn-zinc-400 w-full"
            value={"Login"}
          />
          {logInError && <p className="text-red-700">{logInError}</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;
