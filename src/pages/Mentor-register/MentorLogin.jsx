import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const MentorLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData({
      ...formData,
      termsAccepted: checked,
    });
    if (checked) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      ...formData,
      termsAccepted: false,
    });
  };

  return (
    <div className="bg-gray-900 mt-[1rem] sm:mt-[3rem] md:mt-[5rem] p-4 md:p-10 md:pt-5 rounded-lg text-white max-w-2xl mx-auto font-sans">
      <div className="flex flex-col gap-4">
        <div className="text-[35px] font-bold text-center max-w-2xl ">
          Sign in as Mentor
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[17px] font-semibold">Email or username</p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full p-2 md:p-3 bg-gray-800 rounded text-[16px] md:text-lg h-11 sm:h-14"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[17px] font-semibold">Password</p>
          {/* <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full p-2 md:p-3 bg-gray-800 rounded text-[16px] md:text-lg"
          /> */}
          <div className="relative bg-gray-800 rounded flex px-2 items-center h-11 sm:h-14">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-gray-800 rounded text-[16px] md:text-lg focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-0 m-0 h-fit bg-gray-800 focus:outline-none"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-1 sm:mt-4">
          <button className="bg-[#124E66] w-full text-[20px] h-11 sm:h-14 flex justify-center items-center font-semibold">
            Log in
          </button>
        </div>
        <div className="mt-1 sm:mt-4">
          <button className="border-[2px] gap-3 bg-[#124E66] w-full text-[20px] h-11 sm:h-14 flex justify-center items-center font-semibold">
            <FcGoogle />
            Log in with google
          </button>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="underline text-[17px] font-semibold ">
            Forgot password
          </p>
          <span className="flex gap-6">
            <p className="underline cursor-pointer text-[17px] font-semibold">
              {" "}
              Do not have an account?{" "}
            </p>
            <p
              className="cursor-pointer text-[17px] font-semibold"
              onClick={() => {
                navigate("/mentor-signup");
              }}
            >
              Sign up
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MentorLogin;
