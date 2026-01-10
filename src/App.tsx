import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import BrowseSection from "./components/BrowseSection";
import Dashboard from "./components/Dashboard";
import MyAccount from "./components/MyAccount";
import LearnerDonatePage from "./pages/LearnerDonatePage/LearnerDonatePage";
import ClassroomDonatePage from "./pages/ClassroomDonatePage/ClassroomDonatePage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import DonationSummaryPage from "./pages/DonationSummaryPage/DonationSummaryPage";
import PaymentConfirmedPage from "./pages/PaymentConfirmedPage/PaymentConfirmedPage";


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
          <Route path="/donate/learner/:id" element={<LearnerDonatePage />} />
          <Route path="/donate/classroom/:id" element={<ClassroomDonatePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/donation-summary" element={<DonationSummaryPage />} />
          <Route path="/payment-confirmed" element={<PaymentConfirmedPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<MyAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
