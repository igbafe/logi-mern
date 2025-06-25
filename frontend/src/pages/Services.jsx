import {
  FaArrowRight,
  FaCalendarCheck,
  FaGlobe,
  FaLocationArrow,
  FaPhoneVolume,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const metrics = [
  { name: "Market Share", percentage: 75 },
  { name: "Revenue Growth", percentage: 60 },
  { name: "Profit Growth", percentage: 80 },
  { name: "Logistics Centers", percentage: 90 },
];

function Services() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (inView) {
      metrics.forEach((metric, index) => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            const newProgress = [...prev];
            if (newProgress[index] < metric.percentage) {
              newProgress[index] += 1; // Increment progress
            }
            return newProgress;
          });
        }, 15); // Adjust speed here

        if (progress[index] === metric.percentage) {
          clearInterval(interval);
        }
      });
    }
  }, [inView, progress]);

  return (
    <div>
      <div>
        <p className="h-[12rem] text-3xl font-bold items-center flex justify-center bg-slate-300 text-center w-full">
          OUR SERVICES
        </p>
      </div>
      <section className="pt-5 relative ">
        <div className="flex lg:flex-row md:flex-row mb-3 flex-col justify-center">
          <img
            src="/Images/Services Images/7.jpg"
            className=" lg:w-[30rem] md:w-[23rem] w-full h-[15rem]  md:h-[15rem] lg:h-[20rem]"
            alt=""
          />
          <div className="lg:w-[30rem]  pt-5 bg-slate-100 md:w-[20rem] pl-8">
            <h1 className="font-bold lg:text-3xl md:text-base pb-5">
              Ocean Cargo
            </h1>
            <p className="pb-5 lg:text-base md:text-sm text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              vel quis, obcaecati libero facere impedit, eos eligendi
              perferendis pariatur iusto ex tempore! Laborum amet magni
              voluptatum velit beatae mollitia obcaecati?
            </p>
            <button className="lg:text-start text-center  p-2 items-center  lg:text-base md:text-sm bg-customBlue lg:w-36 md:w-32 text-sm text-white font-semibold">
              <NavLink className="flex flex-row gap-2  items-center" to="/blog">
                Get a qoute <FaArrowRight />
              </NavLink>
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row mb-3 md:flex-row flex-col-reverse lg-pt-0 md:pt-0 pt-8 justify-center">
          <div className="lg:w-[30rem] md:w-[20rem] pt-5 bg-slate-100 pl-8">
            <h1 className="font-bold lg:text-3xl md:text-base pb-5">
              Fly Anywhere
            </h1>
            <p className="pb-5 lg:text-base md:text-sm text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              consequatur. Similique id, accusamus soluta voluptatem odio
              minima! Veniam perspiciatis id impedit quos quibusdam ea
              voluptatibus, illo blanditiis repudiandae, error reprehenderit?
            </p>
            <button className="lg:text-start text-center  p-2 items-center  lg:text-base md:text-sm bg-customBlue lg:w-36 md:w-32 text-sm text-white font-semibold">
              <NavLink className="flex flex-row gap-2  items-center" to="/blog">
                Get a qoute <FaArrowRight />
              </NavLink>
            </button>
          </div>
          <img
            src="/Images/Services Images/6.jpg"
            className=" lg:w-[30rem] md:w-[23rem] w-full h-[15rem] md:h-[15rem] lg:h-[20rem]"
            alt=""
          />
        </div>
        <div className="flex  lg:flex-row md:flex-row lg-pt-0 md:pt-0 pt-8 flex-col justify-center">
          <img
            src="/Images/Services Images/52.jpg"
            className=" lg:w-[30rem] md:w-[23rem] w-full h-[15rem] md:h-[15rem] lg:h-[20rem]"
            alt=""
          />
          <div className="lg:w-[30rem] pt-5 md:w-[20rem] pl-8 bg-slate-100">
            <h1 className="font-bold lg:text-3xl md:text-base pb-5">
              Fly Anywhere
            </h1>
            <p className="pb-5 lg:text-base md:text-sm text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              consequatur. Similique id, accusamus soluta voluptatem odio
              minima! Veniam perspiciatis id impedit quos quibusdam ea
              voluptatibus, illo blanditiis repudiandae, error reprehenderit?
            </p>
            <button className="lg:text-start text-center mb-3 p-2 items-center  lg:text-base md:text-sm bg-customBlue lg:w-36 md:w-32 text-sm text-white font-semibold">
              <NavLink className="flex flex-row gap-2  items-center" to="/blog">
                Get a qoute <FaArrowRight />
              </NavLink>
            </button>
          </div>
        </div>
        <section className="relative w-full z-[-1] mt-[-5rem]">
          <img
            src="/Images/Under Service Images/4.jpg"
            className="w-full lg:h-[40rem] md:h-[45rem] h-[60rem] relative object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute flex lg:flex-row md:flex-row flex-col justify-center items-center gap-7 lg:top-48 md:top-32 top-32 w-full px-8">
            <div className="text-white pl-4 border-l-4 max-w-[30rem] border-customBlue flex-1">
              <h1 className="text-4xl font-bold mb-4">
                Why Choose Us As Provider
              </h1>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                suscipit ipsa facere commodi impedit nostrum nam accusantium est
                maiores ducimus nesciunt perferendis, possimus exercitationem ab
                saepe dolores, dolorem alias ipsam.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                adipisci in perferendis dolore ipsa iusto autem quae assumenda
                odit placeat! Quasi illo magni fuga maiores molestias esse
                blanditiis reiciendis quisquam.
              </p>
            </div>
            <div
              ref={ref}
              className=" flex flex-col w-full gap-9 flex-1 text-white"
            >
              {metrics.map((metric, index) => (
                <div
                  key={metric.name}
                  className="flex flex-col items-center w-full"
                >
                  <div className="relative  w-full">
                    {/* Metric Name - Positioned above the progress bar */}
                    <span className="text-lg font-semibold absolute -top-6 left-0">
                      {metric.name}
                    </span>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-4 mb-4 relative">
                      <div
                        style={{ width: `${progress[index]}%` }}
                        className="bg-customBlue h-full rounded-full transition-all duration-500 ease-out"
                      >
                        {/* Percentage - Positioned at the end of the progress bar */}
                        <span
                          className="text-sm font-semibold absolute -top-6"
                          style={{
                            left: `${progress[index]}%`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          {progress[index]}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className=" relative mt-[-4rem]  flex justify-center items-center w-full z-10">
        <img
          src="/Images/Services Images/12.jpg"
          className="lg:h-[30rem] md:h-[25rem] h-[18rem] w-[23rem] md:w-[40rem] lg:w-[64rem] bg-white p-5 items-center"
          alt=""
        />
      </section>
      <section
        className="
        lg:px-24 sm:px-0 
        lg:flex lg:flex-row lg:justify-between lg:items-center 
        md:grid md:grid-cols-2 md:grid-rows-2 md:items-center 
        flex flex-col justify-center items-center gap-y-5 
        pt-8  p-4"
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
    </div>
  );
}

export default Services;
