import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaShippingFast,
  FaWarehouse,
} from "react-icons/fa";
import { MdWifiProtectedSetup } from "react-icons/md";
import { TiWeatherDownpour } from "react-icons/ti";
import { Link } from "react-router-dom";

function About() {
  const statistics = React.useMemo(() => [
    { id: 1, name: "SAFE CARGO", value: 3450 },
    { id: 2, name: "WAREHOUSE", value: 546 },
    { id: 3, name: "OPERATING HOURS", value: 150 },
    { id: 4, name: "REPRESENTATIVE OFFICE", value: 300 },
  ], []);

  const [counters, setCounters] = useState([0, 0, 0, 0]); // Initial counters state
  const [hasAnimated, setHasAnimated] = useState(false); // To prevent re-animation
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        statistics.forEach((stat, index) => {
          const increment = stat.value / 100; // Slow down the counting
          const interval = setInterval(() => {
            setCounters((prevCounters) => {
              const newCounters = [...prevCounters];
              if (newCounters[index] < stat.value) {
                newCounters[index] = Math.ceil(newCounters[index] + increment);
              }
              return newCounters;
            });
          }, 50); // Slow down the interval

          // Clear interval once counting is done
          setTimeout(() => clearInterval(interval), 200 * 50); // Adjust based on the counting duration
        });
        setHasAnimated(true); // Prevent re-animation
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is in view
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [statistics, hasAnimated]);

  return (
    <div className="pb-8">
        <p className="h-[12rem] text-3xl font-bold items-center flex justify-center bg-slate-300 text-center w-full">
          ABOUT
        </p>
      <div>
        <div className="flex max-w-[90rem] flex-wrap mt-10 gap-6 justify-center">
          <div className="pl-4 border-l-4  w-80 border-customBlue">
            <h1 className="text-xl pb-3 font-bold">Our Services</h1>
            <p className="max-w-80">
              Our logistics company provides freight transport, supply chain
              management, and warehousing solutions to ensure efficient global
              goods movement.
            </p>
          </div>
          <div className="flex gap-2 w-80 h-44 bg-slate-200 p-5 ">
            <FaCheck className="h-10 w-10 rounded-md text-white bg-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">CALL CENTER</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
          <div className="flex lg:flex md:hidden gap-2 w-80 h-44 bg-slate-200 p-5">
            <FaWarehouse className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">WAREHOUSING</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
        </div>

        <div className="flex max-w-[90rem] flex-wrap mt-10 gap-6 justify-center">
          <div className="flex gap-2 w-80 h-44 bg-slate-200 p-5">
            <FaShippingFast className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">SHIPPING</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-80 h-44 bg-slate-200 p-5">
            <MdWifiProtectedSetup className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">PROTECTION POLICY</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
          <div className="flex lg:flex md:hidden  gap-2 w-80 h-44 bg-slate-200 p-5">
            <TiWeatherDownpour className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">WEATHER INSURANCE</h1>
              <p className="max-w-64">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
        </div>

        <div className="flex max-w-[90rem] flex-wrap mt-10 gap-6 justify-center">
          <div className="hidden lg:hidden md:flex gap-2 w-80 h-44 bg-slate-200 p-5">
            <FaWarehouse className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">WAREHOUSING</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
          <div className="hidden lg:hidden md:flex  gap-2 w-80 h-44 bg-slate-200 p-5">
            <TiWeatherDownpour className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">WHEATHER INSURANCE</h1>
              <p className="max-w-64">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="relative mt-16">
        <img
          src="/Images/About Us/9.jpg"
          alt="image"
          className="w-full object-cover h-80"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 to-black/20"></div>

        <div className="absolute top-0 text-center items-center w-full h-full justify-center text-customBlue flex flex-wrap gap-8 text-xl font-bold">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-black">{counters[index]}+</p>{" "}
              {/* Add the "+" after the number */}
              <p className="text-white">{stat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex gap-8 md:flex-wrap lg:px-0 md:px-0 px-8 flex-wrap justify-center">
          <div>
            <img src="/Images/About Us/10.jpg" className="w-[30rem]" alt="" />
          </div>
          <div className="w-[30rem] lg:text-start text-center items-center md:text-start flex flex-col gap-4 ">
            <h2 className="text-3xl font-bold">Become Our Partner</h2>
            <p>
              Partner with us to unlock new opportunities in global logistics
              and take your business to new heights. With our industry-leading
              expertise, cutting-edge technology, and commitment to excellence,
              we can streamline your supply chain operations and boost
              efficiency. Whether you&#x27;re looking for tailored solutions,
              seamless transportation, or comprehensive support, our partnership
              will help you achieve sustainable growth and navigate the
              complexities of the logistics industry with confidence. Together,
              we can shape the future of global logistics.
            </p>
            <button className="lg:text-start text-center hover:bg-blue-700 p-2 items-center  bg-customBlue w-36 text-lg text-white font-semibold">
              <Link
                className="flex flex-row gap-2  items-center"
                to="/contact"
              >
                Contact Us <FaArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section>
      </section>
    </div>
  );
}

export default About;
