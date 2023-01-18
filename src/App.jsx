import { useRef } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  function validate() {
    setValname(true);
    setValemail(true);
    setValmessage(true);
  }

  const [name, setName] = useState();
  const [valname, setValname] = useState(false);
  const [email, setEmail] = useState();
  const [valemail, setValemail] = useState(false);
  const [message, setMessage] = useState();
  const [valmessage, setValmessage] = useState();
  const [pages, setPages] = useState(0);
  const ref = useRef(null);
  const crosel = [
    {
      url: "/bg.jpg",
      capt: "This is a place where technology & creativity fused into digital chemistry",
      id: 0,
    },
    {
      url: "/about-bg.jpg",
      capt: "We don't have the best but we have the greatest team",
      id: 1,
    },
  ];

  const slider = (slideval) => {
    ref.current.scrollLeft += slideval;
  };
  console.log(pages);
  const last = pages;
  const prev = () => {
    const first = pages === 0;
    const move = first ? crosel.length - 1 : pages - 1;
    setPages(move);
  };
  const next = () => {
    const end = pages === crosel.length - 1;
    const move = end ? 0 : pages + 1;
    setPages(move);
  };
  const jump = (move) => {
    setPages(move);
  };

  const err = {};
  if (!name) {
    err.name = "This field is required";
  }
  if (!email) {
    err.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    err.email = "Invalid email address";
  }
  if (!message) {
    err.message = "This field is required";
  }

  return (
    <>
      <nav className="flex flex-row justify-around border-b-2">
        <h1 className="font-bold text-lg my-auto">Company</h1>
        <div>
          <div className="group inline-block">
            <div className="relative text-xs hover:bg-gray-300 p-4 uppercase">
              About
            </div>
            <div className="hidden group-hover:block absolute text-gray-700 z-30 ">
              <a
                href="/"
                className="flex bg-white p-4 w-32 text-xs uppercase hover:bg-neutral-600 hover:text-white"
              >
                History
              </a>
              <a
                href="/"
                className="flex bg-white p-4 w-32  text-xs uppercase hover:bg-neutral-600 hover:text-white"
              >
                Vision Mission
              </a>
            </div>
          </div>
          <a href="/" className="text-xs hover:bg-gray-300 p-4 uppercase">
            Our Work
          </a>
          <a href="/" className="text-xs hover:bg-gray-300 p-4 uppercase">
            Our Team
          </a>
          <a href="/" className="text-xs hover:bg-gray-300 p-4 uppercase">
            Contact
          </a>
        </div>
      </nav>

      <div className="relative">
        <div
          className="text-white absolute top-1/2 right-5 cursor-pointer  z-20"
          onClick={next}
        >
          <img src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-right.png" />
        </div>
        <div
          className="text-white absolute top-1/2 left-5 cursor-pointer  z-20"
          onClick={prev}
        >
          <img src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-left.png" />
        </div>
        <div
          className="transition-all ease-in-out flex overflow-x-hidden mb-8 duration-300 h-full"
          ref={ref}
        >
          <div className="flex">
            {crosel.map((el, index) => {
              return (
                <div
                  className={`transition-all flex-none ${
                    pages == 0 ? "" : "-translate-x-full"
                  } duration-300`}
                >
                  <img src={el.url} alt="" />
                  {pages == index && (
                    <div className="absolute text-white bottom-32 left-48 text-2xl uppercase font-bold bg-black p-4 pr-7 bg-opacity-50 w-1/2 text-left">
                      <h3>{el.capt}</h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute right-1/2 bottom-5">
          <div className="flex justify-center space-x-2 text-2xl">
            {crosel.map((e, pages) => (
              <button
                className="cursor-pointer focus:text-white bg-white rounded-full w-3 h-3 z-20 opacity-30 focus:opacity-100"
                key={pages}
                onClick={() => jump(pages)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="uppercase text-2xl font-bold my-4 mt-20">Our Values</h2>
        <div className="flex flex-row justify-center space-x-4">
          <div className="w-0 h-0 border-t-transparent border-b-transparent border-l-8 border-l-red-600"></div>
          <div className="bg-red-400 text-white p-8 w-72 border-2 border-red-600">
            <img className="mx-auto h-6" src="/lightbulb-o.png" alt="" />
            <h2 className="uppercase font-bold my-3">Innovative</h2>
            <p className="text-sm">
              Lorem dolor impsum sit amet, consectetur adipisicing elit. Impedit
              similique eurn itaque facere temporibus dolores
            </p>
          </div>
          <div className=" bg-emerald-400 text-white p-8 w-72 border-2 border-teal-600">
            <img className="mx-auto h-6" src="/bank.png" alt="" />
            <h2 className="uppercase font-bold my-3">Loyalty</h2>
            <p className="text-sm">
              Lorem dolor impsum sit amet, consectetur adipisicing elit. Impedit
              similique eurn itaque facere temporibus dolores
            </p>
          </div>
          <div className="bg-blue-500 text-white p-8 w-72 border-2 border-blue-700">
            <img className="mx-auto h-6" src="/balance-scale.png" alt="" />
            <h2 className="uppercase font-bold my-3">Respect</h2>
            <p className="text-sm">
              Lorem dolor impsum sit amet, consectetur adipisicing elit. Impedit
              similique eurn itaque facere temporibus dolores
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-2/5 p-8 space-y-4">
        <h2 className="uppercase text-2xl font-bold">Contact Us</h2>
        <form action="/">
          <div className="mb-4">
            <label className="block font-medium text-left" for="name">
              Name
            </label>
            <input
              className={`w-full h-8 border-2 focus:outline-none focus:border-blue-400 ${
                valname && err.name ? " border-red-400" : ""
              }`}
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              onBlur={() => setValname(true)}
              required
            />
            {valname && err.name ? (
              <span className="block text-red-400 text-sm text-left">
                {err.name}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium text-left" for="email">
              Email
            </label>
            <input
              className={`w-full h-8 border-2 focus:outline-none focus:border-blue-400 ${
                valemail && err.email ? " border-red-400" : ""
              }`}
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onBlur={() => setValemail(true)}
              required
            />
            {valemail && err.email ? (
              <span className="block text-red-400 text-sm text-left">
                {err.email}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium text-left" for="message">
              Message
            </label>
            <textarea
              className={`w-full h-32 border-2 focus:outline-none focus:border-blue-400 ${
                valmessage && err.message ? " border-red-400" : ""
              } `}
              type="text"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onBlur={() => setValmessage(true)}
              required
            />
            {valmessage && err.message ? (
              <span className="block text-red-400 text-left text-sm">
                {err.message}
              </span>
            ) : (
              ""
            )}
          </div>
          <button
            className="w-full bg-blue-400 text-white p-2 uppercase text-sm"
            type="submit"
            onClick={() => validate()}
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="text-center bg-neutral-700 text-white p-8">
        <h2>Copyright © 2016. PT Company</h2>
        <div className="flex flex-row justify-center space-x-4 mt-4">
          <img className="h-6" src="/facebook-official.png" alt="" />
          <img className="h-6" src="/twitter.png" alt="" />
        </div>
      </footer>
    </>
  );
}

export default App;
