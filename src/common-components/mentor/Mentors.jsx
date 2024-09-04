import MentorCard from "./MentorCard";
import bannerImage from "../../assets/thumbnail.jpg";
const Mentor = () => {
  return (
    <div>
      <h3 className="text-white font-semibold pl-5 text-2xl">
        Meet our Mentors
      </h3>
      <div className="grid w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-2 ">
        <MentorCard
          name="Hitesh Chaudhary"
          description="I am a teacher by profession. I teach coding to various level of students right from beginners to folks who are already writing great softwares"
          videoPlaceholder={bannerImage}
        />
        <MentorCard
          name="Hitesh Chaudhary"
          description="I am a teacher by profession. I teach coding to various level of students right from beginners to folks who are already writing great softwares"
          videoPlaceholder={bannerImage}
        />
        <MentorCard
          name="Hitesh Chaudhary"
          description="I am a teacher by profession. I teach coding to various level of students right from beginners to folks who are already writing great softwares"
          videoPlaceholder={bannerImage}
        />
        <MentorCard
          name="Hitesh Chaudhary"
          description="I am a teacher by profession. I teach coding to various level of students right from beginners to folks who are already writing great softwares"
          videoPlaceholder={bannerImage}
        />
      </div>
    </div>
  );
};
export default Mentor;
