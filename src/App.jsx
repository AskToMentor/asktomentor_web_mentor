import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedComponent from "./protected/protectedComponent";
import MentorRegister from "./pages/mentor-register/MentorRegister";
import ImportComponent from "./pages/mentor-register/AccountProceed";
import ManuallySignUpForm from "./MentorDetails/SignupManually";
import MentorLogin from "./pages/mentor-register/MentorLogin"

function App() {
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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
