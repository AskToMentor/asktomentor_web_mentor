import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedComponent from "./protected/protectedComponent";
import MentorRegister from "./pages/mentorRegister/MentorRegister";
import ImportComponent from "./pages/mentorRegister/AccountProceed";
import DisplaySKillQuiz from "./common-components/quizForm/Display_Skillquiz";
import ManuallySignUpForm from "./MentorDetails/SignupManually";
import MentorLogin from "./pages/mentorRegister/MentorLogin";
import { useEffect } from "react";
import ContacUs from "./pages/ContactUs/ContacUs";
import Evaluate from "./pages/Evaluate/Evaluate";
import Aboutus from "./pages/AboutUs/Aboutus";
import Blogs from "./pages/Blogs/Blogs";
import SpecificQuiz from "./common-components/quizForm/SpecificQuiz";
import SenarioBasedForm from "./common-components/quizForm/SenarioBasedForm";
import scenarioreport from "./common-components/quizForm/scenarioreport";
import quizresult from "./common-components/quizForm/QuizResults";
import diagnosticform from "./common-components/quizForm/Diagnosticform";
import ProblemBasedQuestions from "./common-components/quizForm/ProblemBasedQuestions";
import QuestionSheet from "./common-components/quizForm/QuestionSheet";
import GenerateQuiz from "./common-components/quizForm/GenerateQuiz";
import problemsolving from "./common-components/quizForm/problemsolving";
import UserProfile from "./pages/Profile/UserProfile";
import TermsandCondition from "./pages/Policy/TermsandCondition";
import PrivacyandPolicy from "./pages/Policy/PrivacyandPolicy";
import MentorSettings from "./pages/Settings/MentorSettings";
import MentorProfile from "./pages/MentorPanel/MentorProfile";
import Chat from "./pages/Chat/Chat";
import Adaptive_questions from "./common-components/quizForm/Adaptive_questions";
import Calendar from "./pages/Calender/Calender";
import SenarioBasedquestions from "./common-components/quizForm/scenariobasedquestions";
import ProblemSolvingReport from './common-components/quizForm/ProblrmSolvingReport';
import diagnosticresult from "./common-components/quizForm/diagnosticresult";

import SkillQuizResult from './common-components/quizForm/SkillQuizResult';

function App() {
  useEffect(() => {
    if (!localStorage.getItem("loginType")) {
      localStorage.setItem("loginType", "Mentor");
      window.location.reload();
    } else {
    }
  }, []);

  return (
    <div className="">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<ProtectedComponent Component={Dashboard} />}
          />
                    <Route
            path="/problemsolving"
            element={<ProtectedComponent Component={problemsolving} />}
          />
                              <Route
            path="/quizresult"
            element={<ProtectedComponent Component={quizresult} />}
          />
          
          <Route
            path="/diagnosticresult"
            element={<ProtectedComponent Component={diagnosticresult} />}
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
 <Route path="/problemsolvingreport" element={<ProblemSolvingReport />} />
 <Route path="/problemBasedQuestions" element={<ProblemBasedQuestions />} />
          <Route
            path="Skill_quiz_questions"
            element={<ProtectedComponent Component={DisplaySKillQuiz} />}
          />
<Route
    path="/skill-quiz-result"
    element={<ProtectedComponent Component={SkillQuizResult} />}
/>


          <Route
            path="problemBasedQuestions"
            element={<ProtectedComponent Component={ProblemBasedQuestions} />}
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
            path="diagnosticform"
            element={<ProtectedComponent Component={diagnosticform} />}
          />
          <Route
            path="Skill_quiz_questions"
            element={<ProtectedComponent Component={DisplaySKillQuiz} />}
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
            path="scenarioreport"
            element={<ProtectedComponent Component={scenarioreport} />}
          />
          <Route
            path="scenario-based"
            element={<ProtectedComponent Component={SenarioBasedForm} />}
          />
                    <Route
            path="Adaptive_questions"
            element={<ProtectedComponent Component={
              Adaptive_questions} />}
          />
                    <Route
            path="scenariobasedquestions"
            element={<ProtectedComponent Component={SenarioBasedquestions} />}
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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
