import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const MentorRegister = () => {
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
    <div className="h-full overflow-y-auto">
      <div className="login-container mb-10 mt-[1rem] sm:mt-[3rem] md:mt-[1rem] p-4 md:p-3 rounded-lg text-white w-[95%] mobile-lg:w-[80%] sm:w-[60%] md:w-[60%] lg:w-[55%] xl:w-[35%] mx-auto font-sans">
        <div className="flex flex-col gap-1">
          <span className="text-[18px] font-semibold pb-1">
            User Information
          </span>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800 rounded focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800 rounded focus:outline-none"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800 rounded focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[18px] font-semibold pb-1 pt-1">Security</span>

          <input
            type="text"
            name="password"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800 rounded focus:outline-none"
          />
          <div className="relative rounded flex items-center text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full  bg-gray-800 h-full rounded text-[14px] pr-14 focus:outline-none "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-0 m-0 h-fit bg-gray-800"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-white" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="relative rounded flex items-center text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full  bg-gray-800 h-full rounded text-[14px] pr-14 focus:outline-none "
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="p-0 m-0 h-fit bg-gray-800"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="my-3 text-sm">
          <p className="text-white font-semibold">Password Must Contain:</p>
          <ul className="list-none pl-4 text-[12px]">
            <li>At least 8 characters</li>
            <li>At least 1 symbol (!, #, ...)</li>
            <li>At least 1 number</li>
          </ul>
        </div>
        <label className="flex items-center my-2 text-lg">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
            className="mr-2 h-[20px] w-[20px]"
          />
          <span className="text-[14px]">
            I have read and agreed to the Terms and Conditions
          </span>
          {/* <span className="text-teal-400 ml-1">*</span> */}
        </label>
        <div className="mt-2 text-sm">
          This site is protected by reCAPTCHA and the Google
          <span className="text-white font-semibold">
            {" "}
            "Privacy Policy"
          </span>{" "}
          and
          <span className="text-white font-semibold">
            {" "}
            "Terms of Service"
          </span>{" "}
          apply
        </div>
        {showModal && (
          <ConfirmationModal onClose={handleCloseModal} payload={formData} />
        )}
      </div>
    </div>
  );
};

export default MentorRegister;
