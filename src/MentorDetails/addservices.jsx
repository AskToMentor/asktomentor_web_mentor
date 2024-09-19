import { IoMdAdd } from "react-icons/io";
import "../MentorDetails/addservices.css";
export default function AddService() {
  return (
    <div className="login-container h-[500px] rounded-lg p-4">
      <div className="h-full">
        <p className="">Setup services</p>
        <div className="flex justify-center h-full items-center flex-col">
          <div className="bg-inherit border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center">
            <IoMdAdd className="text-white text-[20px]" />
          </div>
          <p className="button-text">Add Service</p>
        </div>
      </div>
    </div>
  );
}
