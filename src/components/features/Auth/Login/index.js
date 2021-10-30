import React, { useEffect } from "react";
import Teacher from "../../../../assets/Teacher.png";
import Logo from "../../../../assets/Logo.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, getPosts, loginUser } from "../../authSlice";
import { useHistory } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authSelect);
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/posts");
      dispatch(getPosts());
    }
  }, [isAuthenticated]);

  const onError = (data) => {
    console.log(data);
  };

  return (
    <div className="p-20 bg-green-50 h-screen w-screen flex align-center justify-between">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="max-w-lg bg-white p-10 shadow-2xl rounded-2xl w-full"
      >
        <h1 className="text-5xl font-bold mb-2">Login</h1>
        <p className="mb-10">
          Doesn't have an account yet?{" "}
          <u
            className="text-lightblue-500 cursor-pointer"
            onClick={() => history.push("/register")}
          >
            Sign Up
          </u>
        </p>
        <div className="flex flex-col mb-5">
          <label className="text-xl">Email Address</label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: " ^[^@]+@[^@]+.[^@]+$",
                message: "Invalid Email Address",
              },
            })}
            type="email"
            placeholder="you@example.com"
            className="border-2 rounded-xl py-2 px-5 focus:outline-none focus:border-lightblue-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl flex justify-between">Password</label>
          <div className="relative">
            <input
              {...register("password", {
                required: true,
                minLength: { value: 8, message: "Minimum of 8 characters" },
                maxLength: { value: 16, message: "Maximum of 16 characters" },
              })}
              type="password"
              placeholder="Enter 6 characters or more"
              className="border-2 rounded-xl py-2 px-5 w-full focus:outline-none focus:border-lightblue-500"
            />
          </div>
        </div>
        <div className="mb-10">
          <input type="checkbox" />
          <label className="ml-2">Remember me</label>
        </div>
        <button
          type="submit"
          className="w-full py-5 bg-lightblue-500 rounded-xl text-2xl font-bold text-gray-50 hover:bg-lightblue-400"
        >
          Login
        </button>
      </form>
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Logo" />
        <img src={Teacher} alt="teacher" style={{ width: "1100px" }} />
      </div>
    </div>
  );
};

export default Login;
