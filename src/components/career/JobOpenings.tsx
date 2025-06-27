
import React from "react";
import { Button } from "@/components/ui/button";

const JobOpenings = () => {
  const jobs = [
    {
      title: "Quality Control Officer",
      location: "Bazpur, Uttarakhand",
      department: "QA/QC"
    },
    {
      title: "Plant Manager",
      location: "Bazpur, Uttarakhand",
      department: "Operations"
    },
    {
      title: "Sales Executive",
      location: "Delhi NCR",
      department: "Business Development"
    },
    {
      title: "R&D Analyst",
      location: "Bazpur",
      department: "Research & Development"
    }
  ];

  const scrollToApplication = () => {
    const element = document.getElementById("application-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#E9F5EE' }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#126D39]">
          Open Positions
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-2">
            We're always looking for dynamic talent. Explore current openings below.
          </p>
          <p className="text-lg text-gray-700">
            If you don't find a match, feel free to send us your resume for future opportunities.
          </p>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-[#126D39] mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  📍 {job.location}
                </p>
                <p className="text-gray-600">
                  🏢 {job.department}
                </p>
              </div>
              <Button 
                onClick={scrollToApplication}
                className="bg-[#26C164] hover:bg-[#126D39] text-white px-6 py-2 rounded-lg transition-colors duration-300 self-start md:self-center"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
