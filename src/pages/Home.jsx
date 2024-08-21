import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { FaGlobe } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Set up an IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the content is in the viewport, set it to visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect observer after the element becomes visible
        }
      },
      { threshold: 0.5 } // Trigger when 10% of the element is in view
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {/* Navbar Section */}
      <section>
        <Navbar />
      </section>

      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <img
          src="/Images/Hero Images/12.jpg"
          alt="banner"
          className="w-full h-[35rem] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/20"></div>

        {/* Text and Buttons with Sequential Transition */}
        <div
          ref={contentRef} // Reference to track visibility
          className={`absolute inset-0 flex flex-col lg:pt-48 pt-24 pl-12 lg:pl-28 gap-5 text-white px-4 transition-transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDuration: "3000ms", // 3 seconds duration
            transitionDelay: isVisible ? "1000ms" : "0ms", // 1 second delay for entry
          }}
        >
          {/* Heading */}
          <p className="font-bold text-4xl flex-col flex">
            INDUSTRY LEADING <span>LOGISTIC FIRM</span>
          </p>

          {/* Paragraph */}
          <p className="max-w-[30rem]">
            At Logistics, we specialize in providing seamless logistics and
            supply chain solutions tailored to meet the demands of businesses
            worldwide. With a commitment to reliability and efficiency, we
            ensure that goods move swiftly and securely from point A to point B,
            empowering our clients to focus on growth and success.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="p-3 bg-[#1e3a8a] font-semibold">
              Contact Us
            </button>
            <button className="p-3 border-2 font-semibold">
              Discover More
            </button>
          </div>
        </div>
      </section>
      <section
        className="
  lg:px-24 sm:px-0 
  lg:flex lg:flex-row lg:justify-between lg:items-center 
  md:grid md:grid-cols-2 md:grid-rows-2 md:items-center 
  flex flex-col justify-center items-center gap-y-5 
  pt-8 bg-[#f8fafc] p-4"
      >
        <div className="flex gap-3 justify-center">
          <FaPhoneVolume className="item-center h-12  w-10 text-[#1e3a8a]" />
          <div className="max-w-48">
            <p>CALL CENTER</p>
            <p>give us a free call +1 555-678-3242</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <FaCalendarCheck className="item-center h-12 w-10 text-[#1e3a8a]" />
          <div className="max-w-48">
            <p>WORKING HOURS</p>
            <p>Mon-Sat: 7AM- 5PM Sunday:9AM-3PM</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <FaLocationArrow className="item-center h-12 w-10 text-[#1e3a8a]" />
          <div className="max-w-48">
            <p>OUR LOCATION</p>
            <p>300 Kansas Ave NW New Jersey, United States</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <FaGlobe className="item-center h-12 w-10 text-[#1e3a8a]" />
          <div className="max-w-48">
            <p>GLOBAL OFFICE</p>
            <p>Japan Head Quater in New Hall in Tokyo City</p>
          </div>
        </div>
      </section>
      <div className="mt-8 lg:pl-20 pl-12 md:pl-20">
        <div className="border-l-4 border-[#1e3a8a] pl-4">
          <h1 className="font-bold text-2xl pb-3">Our Services</h1>
          <p className="max-w-96">
            Our logistics company provides freight transport, supply chain
            management, and warehousing solutions to ensure efficient global
            goods movement.
          </p>
        </div>
      </div>
      <section>
        
      </section>
    </div>
  );
}

export default Home;
