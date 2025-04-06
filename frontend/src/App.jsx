import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Success from "./components/Success";
import FileView from "./components/DisplayFiles";
import DonationPage from "./pages/DonationPage";
import Failure from "./components/Failure";
import Families from "./components/ManageFamilies";
import Verification from "./pages/VerificationPage";
import Home from "./pages/HomePage";
import Layout from "./components/Layout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import DonorDashboardPage from "./pages/DonarDashboardPage";
import PredictionForm from "./components/PredictionForm/predict";
import Volunteer from "./components/Volunteer";
import ContactUsPage from "./pages/ContactUsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/donor-dashboard" element={<DonorDashboardPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donate" element={<DonationPage />} />
          {/* -- */}
          <Route path="/fileview" element={<FileView />} />

          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failure />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/volunteer" element={<Volunteer />} />

          <Route path="/dash" element={<Dashboard />} />
        </Route>
        <Route path="/verification" element={<Verification />} />
        <Route path="/families" element={<Families />} />
        <Route path="/predict" element={<PredictionForm />} />
      </Routes>
    </div>
  );
}

export default App;
