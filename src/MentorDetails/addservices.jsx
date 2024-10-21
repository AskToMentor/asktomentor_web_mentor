import { IoMdAdd } from "react-icons/io";
import "../MentorDetails/addservices.css";
export default function AddService({ step, setStep }) {
  return (
    <div className="login-container h-[500px] rounded-lg p-4">
      <div className="h-full">
        <p className="text-[14px]">Setup services</p>
        <div className="flex justify-center h-full items-center flex-col ">
          <div
            className="bg-inherit border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            <IoMdAdd className="text-white text-[20px]" />
          </div>
          <p className="button-text text-[12px]">Add Service</p>
        </div>
      </div>
    </div>
  );
}
