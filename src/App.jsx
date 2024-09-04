import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedComponent from "./protected/protectedComponent";
import SignUpForm from "./pages/Mentor-register/Register";
import ImportComponent from "./pages/Mentor-register/AccountProceed";
import ManuallySignUpForm from "./MentorDetails/signup-manually";

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
            element={<ProtectedComponent Component={SignUpForm} />}
          ></Route>
          <Route
            path="proceed-continue"
            element={<ProtectedComponent Component={ImportComponent} />}
          ></Route>
          <Route
            path="signup-manually"
            element={<ProtectedComponent Component={ManuallySignUpForm} />}
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
