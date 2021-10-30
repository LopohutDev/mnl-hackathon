import React from "react";
import Teacher from "../../../../assets/Teacher2.png";
import Logo from "../../../../assets/Logo.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, registerUser } from "../../authSlice";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { errors, hasErrors } = useSelector(authSelect);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;

    if (password === confirmPassword && hasErrors === false) {
      dispatch(registerUser({ ...data, isPasswordEqual: true }));
      history.push("/register");
    } else {
      dispatch(registerUser({ ...data, isPasswordEqual: false }));
    }
  };

  return (
    <div className="p-20 bg-green-50 h-screen w-screen flex align-center justify-between">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg bg-white p-10 shadow-2xl rounded-2xl w-full"
      >
        <h1 className="text-5xl font-bold mb-2">Register</h1>
        <p className="mb-10">
          Already have an account?{" "}
          <u
            className="text-lightblue-500 cursor-pointer"
            onClick={() => history.push("/login")}
          >
            Log In
          </u>
        </p>
        {hasErrors ? (
          <ul className="mb-5 ">
            {errors.map((error) => (
              <li className="list-disc text-red-500">{error.message}</li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-col mb-5">
          <label className="text-xl">Full Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="border-2 rounded-xl py-2 px-5 focus:outline-none focus:border-lightblue-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl flex justify-between">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: " ^[^@]+@[^@]+.[^@]+$",
                message: "Invalid Email Address",
              },
            })}
            placeholder="your@email.com"
            className="border-2 rounded-xl py-2 px-5 focus:outline-none focus:border-lightblue-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-xl flex justify-between">
            Create Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "Minimum of 8 characters" },
              maxLength: { value: 16, message: "Maximum of 16 characters" },
            })}
            placeholder="Enter 6 characters or more"
            className="border-2 rounded-xl py-2 px-5 focus:outline-none focus:border-lightblue-500"
          />
        </div>
        <div className="flex flex-col mb-10">
          <label className="text-xl flex justify-between">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: true,
              minLength: { value: 8, message: "Minimum of 8 characters" },
              maxLength: { value: 16, message: "Maximum of 16 characters" },
            })}
            placeholder="Enter 6 characters or more"
            className="border-2 rounded-xl py-2 px-5 focus:outline-none focus:border-lightblue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-5 bg-lightblue-500 rounded-xl text-2xl font-bold text-gray-50 hover:bg-lightblue-400"
        >
          Sign Up
        </button>
      </form>
      <div className="flex flex-col items-center ">
        <img src={Logo} alt="Logo" />
        <img src={Teacher} alt="teacher" style={{ width: "800px" }} />
      </div>
    </div>
  );
};

export default Register;
