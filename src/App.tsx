import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import BrowseSection from "./components/BrowseSection";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import LearnerDonatePage from "./pages/LearnerDonatePage/LearnerDonatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <BrowseSection />
            </>
          }
        />
          <Route
              path="/donate/learner/:id"
              element={<LearnerDonatePage />}
          />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}



export default App;
