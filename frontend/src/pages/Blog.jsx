import blogImages from "../data/blog";
import { FaComments, FaFolder } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


function Blog() {
  return (
    <div className="bg-slate-200">
      <section className="flex gap-4 lg:flex-row md:flex-row flex-col px-8">
        <div className="flex flex-col gap-4">
          {blogImages.map((blogs) => (
            <div className="flex flex-col gap-4 bg-white p-6" key={blogs.id}>
              <p className="text-2xl font-bold">{blogs.title}</p>
              <p className="text-[10px]">
                March 3, 2024 by{" "}
                <span className="text-blue-500 underline"> kpornme</span>
              </p>
              <img
                src={blogs.src}
                className="lg:h-[24rem] md:h-[20rem] h-[18rem] w-[44rem] "
                alt="images"
              />
              <div className="max-w-[70rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, doloribus aspernatur nobis, at culpa officiis
                  maxime delectus nesciunt vel voluptate tempore voluptates!
                  Magni, consequuntur quam? Pariatur assumenda eligendi
                  distinctio molestias.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae dicta quisquam quod officia temporibus maiores
                  suscipit possimus eveniet ex, sapiente consectetur quos ipsam
                  doloribus numquam, dolore atque laborum qui? Tempora.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaFolder />
                  <p className="text-blue-500 text-[13px]">Delivery</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments />
                  <p className="text-blue-500 text-[13px]">Leave a comment</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex flex-col bg gap-4 lg:w-[40rem] md:w-[20rem] w-30[rem] sticky top-0 text-sm ">
          <div className="bg-white p-6">
            <div className="flex w-[15rem] md:w-[15rem] border border-gray-300 rounded-lg overflow-hidden ">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <div className="flex items-center justify-center px-4 bg-gray-300 cursor-pointer">
                <CiSearch className="text-xl text-gray-600" />
              </div>
            </div>
          </div>

          <div className="bg-white text-3xl font-semibold p-6">
            <p>Categories</p>
          </div>
          <div className="bg-white underline text-blue-500 p-6">
            <p>
              Logistics <span className="text-black">(3)</span>
            </p>
            <p>
              Uncatergories <span className="text-black">(1)</span>
            </p>
          </div>
          <div className="bg-white flex flex-col gap-4 p-6">
            <p className="text-2xl font-semibold ">Recent Post</p>
            <p className="text-blue-500 underline text-sm">
              Logistics Firm Agrees $9.9bn Property Deal In A Big Property Case
            </p>
            <p className="text-blue-500 underline text-sm">
              Tools To Help Reduce Frieght&#x27;s climate Impact Coming To The New
              Market
            </p>
            <p className="text-blue-500 underline text-sm">
              Uk Logistics Firm Pumps sh4bn Into Warehouse With New Strategies
            </p>
          </div>
          <div className="bg-white flex flex-col gap-6 p-6">
            <p className="text-2xl font-semibold">Events</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur commodi, sapiente quaerat, id officiis temporibus,
              dolor excepturi eum eos iure repellat quis dicta maxime veniam ab
              totam. Aut, numquam at.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ut
              aliquid magni quam! Neque asperiores voluptatum praesentium rem,
              ullam quia. Doloribus asperiores fugiat ipsam ex quam id aperiam
              ipsa eos!
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col">
            <div className="pb-3 text-xl font-semibold">
              <p>Leave a comment</p>
            </div>
            <div>
              <form className="flex flex-col gap-2" action="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="border rounded-md mb-5 p-2"
                  placeholder="Enter Your Name"
                  id=""
                />
                <label htmlFor="comment">Comment</label>
                <textarea
                  name=""
                  className="border h-28"
                  placeholder="Enter Your Commmnet"
                ></textarea>
                <button className="bg-customBlue w-28 text-white text-end items-end p-2">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
