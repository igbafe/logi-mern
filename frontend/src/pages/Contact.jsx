import { CiSearch } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

function Contact() {
  return (
    <div>
      <section>
      </section>
      <div>
        <p className="h-[12rem] text-3xl font-bold items-center flex justify-center bg-slate-300 text-center w-full">
          SERVICES
        </p>
      </div>
      <section className="flex lg:flex-row md:flex-row flex-col mt-8 mb-8 justify-center gap-6">
        <div className="lg:w-[34rem] md:w-[20rem] px-4 md:px-0 lg:px-0 flex flex-col gap-3">
          <h1 className="lg:text-4xl md:text-xl font-bold pb-3">
            Send Us A Message
          </h1>
          <p className="pb-3 lg:text-base md:text-sm text-[10px] w-[19rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio
            voluptate illum non laboriosam autem.
          </p>
          <div className="flex lg:text-sm text-[10px] pb-3 gap-3">
            <input
              type="text"
              placeholder="E.g John Doe"
              className="border h-10 bg-slate-100 lg:w-40 md:w-24 w-28 "
            />
            <input
              type="text"
              placeholder="E.g John@doe.com"
              className="border bg-slate-100 h-10 lg:w-40 md:w-24 w-28"
            />
            <input
              type="text"
              placeholder="subject"
              className="border  h-10 bg-slate-100 lg:w-40 md:w-24 w-28"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border lg:h-[12rem] md:h-[8rem] h-[15rem] bg-slate-100 lg:w-[32rem] md:w-[20rem]"
            id=""
          ></textarea>
          <button className="text-start bg-customBlue lg:text-sm md:text-[12px] text-[12px] pl-2 w-28 h-8 items-center text-white ">
            Send Message
          </button>
        </div>
        <div>
          <img
            src="/Images/Contact Us/8.jpg"
            className="lg:h-[29rem] lg:block md:block hidden md:h-[23rem] lg:w-[30rem] md:w-[23rem]"
            alt=""
          />
        </div>
      </section>
      <section className="mt-24 relative">
        <img
          src="/Images/Blog Images/22.jpg"
          className="w-full  lg:h-[20rem] md:h-[32rem] h-[43rem] object-cover"
          alt=""
        />
        <div className="flex flex-col lg:flex-row md:flex-row flex-wrap max-w-[90rem] absolute top-[5rem] items-center gap-6 justify-center w-full px-4 lg:px-0">
          <div className="flex gap-2 w-80 h-44 bg-slate-200 p-5">
            <CiSearch className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">SHIPPING</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-80 h-44 bg-slate-200 p-5">
            <FaEnvelope className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">PROTECTION POLICY</h1>
              <p className="max-w-80">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
          <div className="flex lg:flex gap-2 w-80 h-44 bg-slate-200 p-5">
            <MdPhoneAndroid className="h-16 w-16 text-customBlue p-2" />
            <div>
              <h1 className="text-xl pb-3 font-bold">WHEATHER INSURANCE</h1>
              <p className="max-w-64">
                Our logistics company provides freight transport and supply
                chain management.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Location
          </h2>

          <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.227013271505!2d-122.41941558468116!3d37.774929579759596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581aa455a38b5%3A0x6d3f9627edc9d4fb!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633568583649!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">Visit our office at:</p>
            <p className="font-semibold text-gray-900">
              123 Main St, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
