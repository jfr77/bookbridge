import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ABTestProvider } from "./contexts/ABTestContext";
import Landing from "./components/Landing";
import BrowseSection from "./components/BrowseSection";
import Dashboard from "./components/Dashboard";
import MyAccount from "./components/MyAccount";
import { LearnerDonateRouter, ClassroomDonateRouter } from "./components/DonateRouter";
import { PaymentRouter, PaymentConfirmedRouter } from "./components/PaymentRouter";
//import PaymentPage from "./flowA/PaymentPage/PaymentPage";
import DonationSummaryPage from "./flowA/DonationSummaryPage/DonationSummaryPage";

function App() {
  return (
    <ABTestProvider>
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
          <Route path="/donate/learner/:id" element={<LearnerDonateRouter />} />
          <Route path="/donate/classroom/:id" element={<ClassroomDonateRouter />} />
          <Route path="/payment" element={<PaymentRouter />} />
          <Route path="/donation-summary" element={<DonationSummaryPage />} />
          <Route path="/payment-confirmed" element={<PaymentConfirmedRouter />} />
          <Route path="/payment-confirmed-b" element={<PaymentConfirmedRouter />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </ABTestProvider>
  );
}

export default App;
