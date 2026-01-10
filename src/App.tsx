import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import BrowseSection from "./components/BrowseSection";
import Dashboard from "./components/Dashboard";
import MyAccount from "./components/MyAccount";

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
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<MyAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
