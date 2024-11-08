import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedComponent from "./protected/protectedComponent";
import MentorRegister from "./pages/mentorRegister/MentorRegister";
import ImportComponent from "./pages/mentorRegister/AccountProceed";
import ManuallySignUpForm from "./MentorDetails/SignupManually";
import MentorLogin from "./pages/mentorRegister/MentorLogin";
import { useEffect } from "react";
import ContacUs from "./pages/ContactUs/ContacUs";
import Evaluate from "./pages/Evaluate/Evaluate";
import Aboutus from "./pages/AboutUs/Aboutus";
import Blogs from "./pages/Blogs/Blogs";
import SpecificQuiz from "./common-components/quizForm/SpecificQuiz";
import SenarioBasedForm from "./common-components/quizForm/SenarioBasedForm";
import QuestionSheet from "./common-components/quizForm/QuestionSheet";
import GenerateQuiz from "./common-components/quizForm/GenerateQuiz";
import UserProfile from "./pages/Profile/UserProfile";
import TermsandCondition from "./pages/Policy/TermsandCondition";
import PrivacyandPolicy from "./pages/Policy/PrivacyandPolicy";
import MentorSettings from "./pages/Settings/MentorSettings";
import MentorProfile from "./pages/MentorPanel/MentorProfile";
import Chat from "./pages/Chat/Chat";
import Calendar from "./pages/Calender/Calender";
import Tools from "./pages/Tools/Tools";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import BlogDetails from "./pages/Blogs/BlogDetails";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("loginType")) {
      localStorage.setItem("loginType", "Mentor");
      window.location.reload();
    } else {
    }
  }, []);

  console.log("test")
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<ProtectedComponent Component={Dashboard} />}
          />
          <Route
            path="mentor-signup"
            element={<ProtectedComponent Component={MentorRegister} />}
          />
          <Route
            path="proceed-continue"
            element={<ProtectedComponent Component={ImportComponent} />}
          />
          <Route
            path="signup-manually"
            element={<ProtectedComponent Component={ManuallySignUpForm} />}
          />
          <Route
            path="login"
            element={<ProtectedComponent Component={MentorLogin} />}
          />
          <Route
            path="contact-us"
            element={<ProtectedComponent Component={ContacUs} />}
          />
          <Route
            path="evalaute"
            element={<ProtectedComponent Component={Evaluate} />}
          />
          <Route
            path="about-us"
            element={<ProtectedComponent Component={Aboutus} />}
          />
          <Route
            path="blogs"
            element={<ProtectedComponent Component={Blogs} />}
          />
          <Route
            path="skill-specific-quiz"
            element={<ProtectedComponent Component={SpecificQuiz} />}
          />
          <Route
            path="scenario-based"
            element={<ProtectedComponent Component={SenarioBasedForm} />}
          />
          <Route
            path="question-sheet"
            element={<ProtectedComponent Component={QuestionSheet} />}
          />
          <Route
            path="generate-quiz"
            element={<ProtectedComponent Component={GenerateQuiz} />}
          />
          <Route
            path="mentor-profile"
            element={<ProtectedComponent Component={UserProfile} />}
          />
          <Route
            path="terms-conditions"
            element={<ProtectedComponent Component={TermsandCondition} />}
          />
          <Route
            path="privacy-policy"
            element={<ProtectedComponent Component={PrivacyandPolicy} />}
          />
          <Route
            path="setting"
            element={<ProtectedComponent Component={MentorSettings} />}
          />
          <Route
            path="mentor-panel"
            element={<ProtectedComponent Component={MentorProfile} />}
          />
          <Route
            path="chat"
            element={<ProtectedComponent Component={Chat} />}
          />
          <Route
            path="calender"
            element={<ProtectedComponent Component={Calendar} />}
          />
          <Route
            path="tools"
            element={<ProtectedComponent Component={Tools} />}
          />
          <Route
            path="subscription"
            element={<ProtectedComponent Component={Subscriptions} />}
          />
           <Route
            path="blog-details"
            element={<ProtectedComponent Component={BlogDetails} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
