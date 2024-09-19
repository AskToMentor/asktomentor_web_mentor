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
    onClose()
    Swal.fire({
      imageUrl: FinishImage,
      imageHeight: 300,
      imageWidth: 450,
      imageAlt: "Registration Completed",
      background:
        "#124E66",
      customClass: {
        confirmButton: "swal-custom-btn", // Add a custom class for the button
        image: "swal-custom-image",
      },
      buttonsStyling: false, // Disable the default styling to apply custom styles
      allowOutsideClick: false,
      showClass: {
        popup: "animate__animated animate__zoomIn", // Zoom-in animation when the alert appears
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut", // Fade-out animation when the alert closes
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/signup-manually");
        // You can log any value or perform any action here
      }
    });
    return;
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
        Swal.fire({
          imageUrl: FinishImage,
          imageHeight: 300,
          imageWidth: 450,
          imageAlt: "Registration Completed",
          background:
            "linear-gradient(109.46deg, rgba(50, 55, 61, 0.93) 20.67%, rgba(33, 89, 112, 0.74) 90.16%)",
          customClass: {
            confirmButton: "swal-custom-btn", // Add a custom class for the button
            image: "swal-custom-image",
          },
          buttonsStyling: false, // Disable the default styling to apply custom styles
          allowOutsideClick: false,
          showClass: {
            popup: "animate__animated animate__zoomIn", // Zoom-in animation when the alert appears
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut", // Fade-out animation when the alert closes
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/signup-manually");
            // You can log any value or perform any action here
          }
        });
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-gray-800 p-4 sm:p-8 md:p-12 rounded-lg text-center text-white w-[600px] relative h-fit">
        {/* Rounded Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-700 p-2 rounded-full flex items-center justify-center"
          style={{ width: "36px", height: "36px" }}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <h3 className=" text-2xl sm:text-3xl font-semibold">
          Submit Sign Up ?
        </h3>
        <p className="mt-6 text-[14px] sm:text-lg">
          Pressing the "Continue" button confirms that your account will be
          created and will be ready to use. Other steps can be skipped if
          necessary. You will not be able to return to this step.
        </p>
        <div className="mt-8 flex space-x-4">
          <button
            onClick={onClose}
            className="w-1/2 px-3 sm:px-6 py-2 sm:py-3 md:py-3 bg-gray-900 text-white rounded-full text-center text-lg"
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
            className="w-full px-3 sm:px-6 py-2 sm:py-3 md:py-3 bg-[#124E66] rounded-full text-white text-center text-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
