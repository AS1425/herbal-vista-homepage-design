
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerHero from "@/components/career/CareerHero";
import WhyWorkWithUs from "@/components/career/WhyWorkWithUs";
import CoreValues from "@/components/career/CoreValues";
import JobOpenings from "@/components/career/JobOpenings";
import ApplicationForm from "@/components/career/ApplicationForm";
import FooterCTA from "@/components/career/FooterCTA";

const Career = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CareerHero />
      <WhyWorkWithUs />
      <CoreValues />
      <JobOpenings />
      <ApplicationForm />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Career;
