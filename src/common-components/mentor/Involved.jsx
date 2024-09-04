import InvolvedCard from "./InvolvedCard";
import bannerImage1 from "../../assets/img1.jpeg";
import bannerImage2 from "../../assets/img2.jpeg";
import bannerImage3 from "../../assets/img3.jpeg";
import bannerImage4 from "../../assets/img4.jpeg";



const Involved = () => {
  return (
    <div className="mt-5">
      <h3 className="text-white font-semibold pl-5 text-2xl">Steps Involved</h3>
      <div className="grid w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-2">
        <InvolvedCard
          name="Connect with Mentors"
          description="Choose from a variety of mentors specializing in different fields of expertise"
          videoPlaceholder={bannerImage1}
        />

        <InvolvedCard
          name="Ask Questions From Mentor"
          description="Ask detailed questions and get personalized answers from our mentors."
          videoPlaceholder={bannerImage3}
        />

        <InvolvedCard
          name="Personalized Guidance"
          description="Receive tailored advice and strategies to overcome your learning challenges."
          videoPlaceholder={bannerImage2}
        />

        <InvolvedCard
          name="Access Learning Resources"
          description="Explore blogs, articles, and educational content curated by our mentors."
          videoPlaceholder={bannerImage4}
        />
      </div>
    </div>
  );
};

export default Involved;
