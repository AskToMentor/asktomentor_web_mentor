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
import DisplaySKillQuiz from "./common-components/quizForm/Display_Skillquiz";
import Adaptive_questions from "./common-components/quizForm/Adaptive_questions";

import howtogenerateapi from "./pages/apigenerate/howtogenerateapi";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("loginType")) {
      localStorage.setItem("loginType", "Mentor");
      window.location.reload()
    } else {
    }
  }, []);

  return (
    <div className="w-full overflow-hidden h-full">
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
            path="Skill_quiz_questions"
            element={<ProtectedComponent Component={DisplaySKillQuiz} />}
          />
          <Route
            path="Adaptive_questions"
            element={<ProtectedComponent Component={
              Adaptive_questions} />}
          />
                    <Route
            path="howtogenerateapi"
            element={<ProtectedComponent Component={
              howtogenerateapi} />}
          />
          
<Route
            path="generate-quiz"
            element={<ProtectedComponent Component={
              GenerateQuiz} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
