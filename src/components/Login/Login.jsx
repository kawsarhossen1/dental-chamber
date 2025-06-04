import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    handleLogin(email, password)
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border p-2 rounded"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            className=" bg-blue-500 text-white p-2 rounded hover:btn-primary w-[50%] font-bold"
          >
            Login
          </button>
          <button
            className=" bg-blue-500 text-white p-2 rounded hover:btn-primary w-[50%] font-bold"
            onClick={handleGoogleLogin}
          >
            Google Login
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-center mt-2">
            {error.split("/")[1].slice(0, 18)}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
