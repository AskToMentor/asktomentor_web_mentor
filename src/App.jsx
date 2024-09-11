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
          ></Route>
          <Route
            path="proceed-continue"
            element={<ProtectedComponent Component={ImportComponent} />}
          ></Route>
          <Route
            path="signup-manually"
            element={<ProtectedComponent Component={ManuallySignUpForm} />}
          ></Route>
          <Route
            path="login"
            element={<ProtectedComponent Component={MentorLogin} />}
          ></Route>
          <Route
            path="contact-us"
            element={<ProtectedComponent Component={ContacUs} />}
          ></Route>
          <Route
            path="evalaute"
            element={<ProtectedComponent Component={Evaluate} />}
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
