import React from "react";
import Header from "./components/Header";
import HomePage from "./Pages/Home.page";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto lg:px-4 md:px-2 px-1 lg:py-8 md:py-4 py-2">
        <Outlet />
      </div>
      <div className="bg-white shadow-lg rounded-lg bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
