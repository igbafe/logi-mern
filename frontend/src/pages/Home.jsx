import { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaLongArrowAltRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import servicesImages from "../data/services";
import { useInView } from "react-intersection-observer";
import blogImages from "../data/blog";

function Home() {
  const [isSmallOrMediumScreen, setIsSmallOrMediumScreen] = useState(false);
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

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallOrMediumScreen(screenWidth < 1024); // Covers both small and medium screens (less than 1024px)
    };

    // Check screen size on component mount and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.3, // Trigger when 30% of the element is visible
  });

  const metrics = [
    { name: "Market Share", percentage: 75 },
    { name: "Revenue Growth", percentage: 60 },
    { name: "Profit Growth", percentage: 80 },
    { name: "Logistics Centers", percentage: 90 },
  ];

  return (
    <div className="bg-[#f8fafc]">

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
      <div className="mt-20 lg:pl-20 pl-12 md:pl-20">
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
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1  gap-8 lg:px-28 md:px-20 px-12 pt-20">
          {servicesImages.map((services) => (
            <div className="flex flex-col gap-2" key={services.id}>
              <img
                src={services.src}
                alt="services"
                className="w-full h-auto sm:h-80 md:h-48 object-cover"
              />
              <p className="text-xl font-bold">{services.title}</p>
              <p className="max-w-72">
                {isSmallOrMediumScreen
                  ? "Our logistics company offers comprehensive services, including freight transportation..."
                  : "Our logistics company offers comprehensive services, including freight transportation, supply chain management, and warehousing solutions."}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20  pb-3">
        <div className="flex lg:flex-row max-md:flex-col gap-y-5 md:gap-x-5 gap-x-10 items-center justify-center">
          <div className="lg:pl-8 pl-8 md:pl-4 border-l-4 lg:w-80 md:w-60 w-80  flex flex-col gap-5 border-[#1e3a8a]">
            <p className="text-[#1e3a8a] font-bold">OUR TESTIMONIAL</p>
            <p className="text-[#1e3a8a] font-bold text-3xl">
              What customer say about us
            </p>
            <p className="max-w-64">
              Logistics Co. has consistently provided reliable, efficient
              service, ensuring my shipments arrive on time and in perfect
              condition.
            </p>
          </div>
          <div className="flex flex-col gap-4  lg:w-80 w-80 md:w-60 rounded-md shadow-lg bg-white lg:h-64 md:h-80 h-80 p-5">
            <div className="text-[#1e3a8a]">
              <FaQuoteRight />
            </div>
            <p className="max-w-72">
              Logistics Co. has consistently provided reliable, efficient
              service, ensuring my shipments arrive on time and in perfect
              condition.
            </p>
            <div className="flex text-[#1e3a8a] gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <img
                src="/Images/Testimonial Images/ava4.jpg"
                className="h-20 rounded-full"
                alt=""
              />
              <p className="font-bold">James Golden</p>
            </div>
          </div>
          <div className="flex flex-col gap-4  lg:w-80 w-80 md:w-60 rounded-md shadow-lg bg-white lg:h-64 md:h-80 h-80 p-5">
            <div className="text-[#1e3a8a]">
              <FaQuoteRight />
            </div>
            <p className="max-w-72">
              Logistics Co. has consistently provided reliable, efficient
              service, ensuring my shipments arrive on time and in perfect
              condition.
            </p>
            <div className="flex text-[#1e3a8a] gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <img
                src="/Images/Testimonial Images/ava2.jpg"
                className="h-20 rounded-full"
                alt=""
              />
              <p className="font-bold">Ama Gifty</p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={ref}
        className="relative bg-cover bg-center mt-20 lg:h-[25rem] md:h-[40rem]"
        style={{ backgroundImage: "url('/Images/Under Service Images/4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white lg:px-24 md:px-12 sm:px-4 py-20">
          <div className="flex lg:flex-row md:flex-col flex-col items-center gap-6 w-full  lg:max-w-6xl">
            {/* Percentage Section */}
            <div className="space-y-8 flex-[2] px-5 w-full">
              {metrics.map((metric, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">{metric.name}</span>
                    <span>{inView ? `${metric.percentage}%` : "0%"}</span>
                  </div>
                  <div className="w-full bg-gray-200 opacity-60 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full bg-[#1e3a8a] rounded-full transition-all duration-1000`}
                      style={{
                        width: inView ? `${metric.percentage}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Text Section */}
            <div className="flex-1 px-5 pl-5 border-l-4 border-[#1e3a8a] text-left">
              <p className="text-5xl font-semibold">Our Year In Numbers</p>
              <p className="mt-4 text-lg">
                This year, we achieved an impressive gross profit of 80% and
                expanded our reach by securing a 75% market share, demonstrating
                our commitment to growth and success in the logistics industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-16 lg:pl-20 pl-12 md:pl-20">
        <div className="border-l-4 border-[#1e3a8a] pl-4">
          <h1 className="font-bold text-2xl pb-3">Latest Blog & News</h1>
          <p className="max-w-96">
            Stay up-to-date with the latest insights and industry news from our
            logistics experts. Discover key trends, innovations, and success
            stories in freight transport, supply chain management, and
            warehousing solutions.
          </p>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1  gap-8 lg:px-28 md:px-20 px-12 pt-20">
          {blogImages.map((blogs) => (
            <div className="flex flex-col gap-2" key={blogs.id}>
              <img
                src={blogs.src}
                alt="services"
                className="w-full h-auto sm:h-80 md:h-48 object-cover"
              />
              <p className="text-lg font-semibold">{blogs.title}</p>
              <p className="tex-xs font-thin">
                WpWebsiteTeacher | March 1, 2024 | No Comment
              </p>
              <p className="max-w-72">
                {isSmallOrMediumScreen
                  ? "Our logistics company offers comprehensive services, including freight transportation..."
                  : "Our logistics company offers comprehensive services, including freight transportation, supply chain management, and warehousing solutions."}
              </p>
            </div>
          ))}
          <button className="flex items-center gap-2 p-2 text-white w-32 text-center justify-center font-semibold bg-[#1e3a8a]">
            View All <FaLongArrowAltRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
