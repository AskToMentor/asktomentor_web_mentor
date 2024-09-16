import MentorCard from "./MentorCard";
import bannerImage from "../../assets/download.png";
const Mentor = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-14 py-12 bg-[#06141C82]">
      <div className="text-white font-normal pl-5 text-2xl flex-wrap flex items-center gap-2">
        <p className="text-[50px] common-font-style leading-[60px] text-white">
          Meet our{" "}
        </p>
        <p className="text-[#124E66] text-[50px] common-font-style leading-[60px]">
          Top Mentors
        </p>
      </div>
      <div>
        <p className="text-[20px] text-white pl-5 font-normal">
          For people making impact
        </p>
      </div>
      <div className="w-full items-center grid grid-cols-1 tablet-sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-20 mt-10 mb-10 ">
        <MentorCard
          name="Hitesh Chaudhary"
          position="Web Developer"
          description="Timely precision, where promises meet performance, ensuring your project's success"
          videoPlaceholder={bannerImage}
        />
        <MentorCard
          name="Hitesh Chaudhary"
           position="Web Developer"
          description="Timely precision, where promises meet performance, ensuring your project's success"
          videoPlaceholder={bannerImage}
        />
        <MentorCard
          name="Hitesh Chaudhary"
           position="Web Developer"
          description="Timely precision, where promises meet performance, ensuring your project's success"
          videoPlaceholder={bannerImage}
        />
        <MentorCard
          name="Hitesh Chaudhary"
           position="Web Developer"
          description="Timely precision, where promises meet performance, ensuring your project's success"
          videoPlaceholder={bannerImage}
        />
      </div>
    </div>
  );
};
export default Mentor;
