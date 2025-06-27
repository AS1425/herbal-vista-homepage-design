
import React from "react";

const FooterCTA = () => {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#126D39' }}>
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Not seeing a role that fits?
        </h3>
        <p className="text-lg text-white">
          Email us directly at{" "}
          <a 
            href="mailto:hr@tirupatiherbal.com" 
            className="text-[#26C164] hover:text-white transition-colors duration-300 underline"
          >
            hr@tirupatiherbal.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
