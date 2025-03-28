import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminLayout from "./components/AdminLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import CommunityPage from "./pages/CommunityPage";
import ContactPage from "./pages/ContactPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import VolunteerRegistrationPage from "./pages/VolunteerRegistrationPage";
import VolunteerCTA from "./components/VolunteerCTA";
import GallerySection from "./components/GallerySection";
import EventManagement from "./components/EventManagement";
import MessageList from "./components/MessageList";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/volunteer" element={<VolunteerRegistrationPage />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="events" element={<EventManagement />} />
              <Route path="messages" element={<MessageList />} />
            </Route>
          </Routes>
        </main>
        <GallerySection />
        <VolunteerCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
