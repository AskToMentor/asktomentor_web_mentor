import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MentorSignUp } from "../../service/MentorSignUpSignIn.jsx";
import ShowSucessmessages from "../../alert-messages/ShowSucessmessages";
import ShowErrorMessages from "../../alert-messages/ShowErrorMessages";
import FinishImage from "../../../public/completed.gif";
import Swal from "sweetalert2";

const ConfirmationModal = ({ onClose, payload }) => {
  const navigate = useNavigate();
  const mentorRegisterFunction = async () => {
    onClose();
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      termsAccepted,
    } = payload;
    if (!firstName) {
      ShowErrorMessages("Please fill the first name");
      return;
    } else if (!lastName) {
      ShowErrorMessages("Please fill the last name");
      return;
    } else if (!email) {
      ShowErrorMessages("Please fill the email");
      return;
    } else if (!password) {
      ShowErrorMessages("Please fill the password");
      return;
    } else if (!confirmPassword) {
      ShowErrorMessages("Please fill the confirm password");
      return;
    } else if (password != confirmPassword) {
      ShowErrorMessages("Password does not match with the confirm password");
      return;
    } else {
      const payload = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword,
        role: 1,
        timeZone: "Asia/Kolkata",
      };
      const response = await MentorSignUp(payload);
      console.log("response is....", response);
      if (response?.success) {
        localStorage.setItem("registered_user_id", response?.data?.userId);
        Swal.fire({
          html: `
            <div class="swal-content">
              <img src="${FinishImage}" alt="Registration Completed" class="swal-custom-image" />
            </div>
          `,
          background: "#124E66",
          customClass: {
            popup: "swal-custom-popup", // Custom class for the popup
            closeButton: "swal-close-button",
          },
          allowOutsideClick: false,
          showClass: {
            popup: "animate__animated animate__zoomIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/signup-manually");
          }
        });
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-gray-800 p-4 rounded-lg text-center text-white w-[400px] relative h-fit">
        {/* Rounded Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-700 p-2 rounded-full flex items-center justify-center"
          style={{ width: "36px", height: "36px" }}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <h3 className="text-[26px] font-semibold">Submit Sign Up ?</h3>
        <p className="mt-6 text-[14px]">
          Pressing the "Continue" button confirms that your account will be
          created and will be ready to use.
        </p>
        <div className="mt-8 flex space-x-4">
          <button
            onClick={onClose}
            className="h-10 w-full bg-gray-900 text-[14px] rounded-full text-white text-center flex justify-center items-center"
          >
            No
          </button>
          {/* <Link to="/signup-manually" className="w-1/2">
            <button
              onClick={mentorRegisterFunction()}
              className="w-full px-3 sm:px-6 py-2 sm:py-3 md:py-4 bg-teal-500 rounded-full text-white text-center text-lg"
            >
              Continue
            </button>
          </Link> */}
          <button
            onClick={() => {
              mentorRegisterFunction();
            }}
            className="w-full h-10 text-[14px] bg-[#124E66] rounded-full text-white text-center flex justify-center items-center"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
