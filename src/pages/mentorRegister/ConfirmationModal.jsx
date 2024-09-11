import React from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ConfirmationModal = ({ onClose }) => {
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

        <h3 className=" text-2xl sm:text-3xl font-semibold">Submit Sign Up ?</h3>
        <p className="mt-6 text-[14px] sm:text-lg">
          Pressing the "Continue" button confirms that your account will be
          created and will be ready to use. Other steps can be skipped if
          necessary. You will not be able to return to this step.
        </p>
        <div className="mt-8 flex space-x-4">
          <button
            onClick={onClose}
            className="w-1/2 px-3 sm:px-6 py-2 sm:py-3 md:py-4 bg-gray-900 text-teal-400 rounded-full text-center text-lg"
          >
            No
          </button>
          <Link to="/signup-manually" className="w-1/2">
            <button
              onClick={onClose}
              className="w-full px-3 sm:px-6 py-2 sm:py-3 md:py-4 bg-teal-500 rounded-full text-white text-center text-lg"
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
