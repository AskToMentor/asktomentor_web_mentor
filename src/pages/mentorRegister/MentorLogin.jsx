import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GetLoginType } from "../../utility/GetLoginType";
import {
  MentorGoogleSignIn,
  MentorSignIn,
} from "../../service/MentorSignUpSignIn";
import ShowSucessmessages from "../../alert-messages/ShowSucessmessages";
import { auth, provider } from "../../utility/firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { getCurrentUserInfo } from "../../service/SignUpProcess";
const MentorLogin = () => {
  const getLoginType = GetLoginType();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  const mentorLoginFunction = async () => {
    try {
      const { email, password } = formData;
      if (!email) {
        ShowErrorMessages("Please fill the email");
        return;
      } else if (!password) {
        ShowErrorMessages("Please fill the password");
        return;
      } else {
        setLoading(true);
        const payload = {
          loginId: email,
          password: password,
          role: 1,
        };
        const response = await MentorSignIn(payload);
        console.log("response is....", response);
        if (response?.success) {
          const token = response?.data?.token;
          if (token) {
            localStorage.setItem("token", token);
          }
          getCurrentUserData();
          // ShowSucessmessages("You have successfully logged in");
          navigate("/mentor-panel");
        }
      }
    } catch (error) {
      console.log("error is", error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      console.log("ID Token", idToken);
      if (idToken) {
        setLoading(true);
        const payload = {
          loginId: idToken,
          role: 1,
        };
        const response = await MentorGoogleSignIn(payload);
        console.log("response is....", response);
        if (response?.success) {
          const token = response?.data?.token;
          if (token) {
            localStorage.setItem("token", token);
          }
          getCurrentUserData();
          // ShowSucessmessages("You have successfully logged in");
          navigate("/mentor-panel");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };
  const getCurrentUserData = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUserInfo();
      console.log(".....", response);
      if (response?.success) {
        const data = response?.data;
        console.log("response", response);
        localStorage.setItem("currentUser", JSON.stringify(data));
        // window.location.reload();
      }
    } catch (error) {
      console.log("error is", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      {loading && Loader(loading)}

      <div className="login-container mt-[1rem] mb-10 sm:mt-[3rem] md:mt-[2mrem] p-4 md:p-5 md:pt-5 overflow-y-auto rounded-lg text-white w-[95%] mobile-lg:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] mx-auto font-sans">
        <div className="flex flex-col gap-1">
          <div className="text-[19px] font-bold text-left max-w-2xl flex flex-col gap-2 ">
            {getLoginType == "Mentee"
              ? "Sign In As Mentee"
              : "Sign In As Mentor"}{" "}
            <p className="text-[15px] font-medium text-left max-w-2xl ">
              Welcome back! Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/* <p className="text-[17px] font-semibold">Email or username</p> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full text-[14px] h-10 p-2 md:p-3 my-[6px] md:my-1 bg-gray-800 rounded focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 mt-3">
            <div className="relative bg-gray-800 rounded flex px-2 items-center gap-2 h-10">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-gray-800 rounded focus:outline-none text-[14px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-0 m-0 h-fit bg-gray-800 focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-white" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-2 font-medium gap-3">
            <p className=" text-[15px]">Forgot password ?</p>
            <p className=" text-[15px]">Restore it</p>
          </div>
          <div className="mt-1 sm:mt-4">
            <button
              className="bg-[#124E66] w-full text-[16px] h-10 sm:h-10 flex justify-center items-center font-semibold shadow-lg z-50"
              onClick={() => {
                mentorLoginFunction();
              }}
            >
              Login
            </button>
          </div>
          <div className="mt-1 sm:mt-4">
            <button
              className="border-[2px] gap-3 bg-white text-black w-full text-[16px] h-11 sm:h-11 flex justify-center items-center font-semibold"
              onClick={handleLogin}
              type="button"
            >
              <FcGoogle className="text-[25px]" />
              Login with google
            </button>
          </div>
          <div className="w-full flex flex-col gap-3 mt-2">
            <span className="flex gap-3">
              <p className="cursor-pointer text-[15px] font-medium">
                {" "}
                Do not have an account?{" "}
              </p>
              <p
                className="cursor-pointer text-[15px] font-medium"
                onClick={() => {
                  navigate("/mentor-signup");
                }}
              >
                Sign up
              </p>
            </span>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-row gap-1 flex-wrap text-[13px] font-light">
              {" "}
              <p className="text-nowrap">
                The site is protected by reCAPTCHA and the Google{" "}
              </p>
              <div className="flex items-center gap-1">
                <Link to="/privacy-policy">
                  <p className="text-white text-[14px] text-nowrap font-semibold">
                    Privacy and Policy
                  </p>
                </Link>{" "}
                and{" "}
              </div>
              <div className="flex items-center gap-1">
                <Link to="/terms-conditions">
                  {" "}
                  <p className="text-white text-[14px] font-semibold">
                    Terms and Service
                  </p>
                </Link>{" "}
                apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorLogin;
