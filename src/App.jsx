import React from "react";
import Demo from "./demo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home.page";
import Index from ".";
import OrgCommittePage from "./Pages/OrgCommittee.page";
import FacultyPage from "./Pages/Faculty.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticePage from "./Pages/Notice.page";
import ContactPage from "./Pages/Contact.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/org-committee" element={<OrgCommittePage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
