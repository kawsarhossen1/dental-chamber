import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { CameraIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const { handleRegister, manageProfile } = useContext(authContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password did't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("password must at least one lowercase latter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("password must at least one uppercase latter");
      return;
    }

    console.log(name, image, email, password, confirmPassword);
    handleRegister(email, password).then((res) => {
      manageProfile(name, image);
    });
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            placeholder="Enter your full name"
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Upload Image</label>
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 border border-dashed p-3 rounded hover:bg-gray-200 transition">
            <CameraIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">Choose an image</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>

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

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full border p-2 rounded"
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-2"> {error}</p>}
    </div>
  );
};

export default Register;
