import { useState } from "react";
import Search from "./components/Search";
import { FaSearch, FaAlignRight, FaArrowRight } from "react-icons/fa";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
function App() {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
    console.log({ menuState });
  };

  onkeydown = (e) => {
    if (e.key === "/" && e.altKey === true) {
      setSearchBox(!searchBox);
    }
  };
  // search toggle function
  const [searchBox, setSearchBox] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* header */}

      <div className=" flex  fixed top-0 w-full justify-between items-center md:px-16 px-4  py-1 shadow-md shadow-slate-200/40 bg-gradient-to-tr to-red-500/10 from-slate-800/10 backdrop-filter backdrop-blur-md">
        <img src="/logo-dark.png" alt="logo" className="h-16 w-16" />

        <ul
          className={`md:flex md:space-x-4 ${
            menuState ? "block" : "hidden"
          } right-0  bg-white/95 md:space-y-0 space-y-8 h-screen md:h-auto text-xl px-8 md:px-0 backdrop-filter md:backdrop-filter-none backdrop-blur-lg  w-full top-0  md:flex md:relative md:w-auto md:bg-transparent py-12 md:py-2 fixed justify-center items-center  md:text-lg text-slate-700`}
        >
          <li className="hover:text-red-500 cursor-pointer transition-all">
            Home
          </li>
          <li className="hover:text-red-500 cursor-pointer transition-all">
            Blog
          </li>

          <li className="hover:text-red-500 cursor-pointer transition-all">
            About
          </li>
          <li className="hover:text-red-500 cursor-pointer transition-all">
            Events
          </li>
          <li className="hover:text-red-500 cursor-pointer transition-all">
            Contact
          </li>
          <button
            onClick={() => {
              setSearchBox(!searchBox);
              setMenuState(false);
            }}
            className="text-white bg-red-500  md:px-2 px-4 transition-all hover:bg-red-600 md:rounded-full rounded-md md:grid w-32 md:w-10 h-10 flex justify-items-center place-items-center "
          >
            <span className="mx-2 md:hidden">Search</span>
            <AiOutlineSearch />
          </button>
          <span
            onClick={() => setMenuState(!menuState)}
            className="text-red-500 md:hidden text-2xl absolute top-0 right-4"
          >
            <AiOutlineClose />
          </span>
        </ul>
        <FaAlignRight
          className="block md:hidden text-2xl text-slate-600"
          onClick={toggleMenu}
        />
      </div>
      {/* hero section */}
      <div className="w-full md:py-28 min-h-screen flex items-center lg:bg-[url('hero.jpg')] bg-no-repeat lg:py-12  bg-cover md:bg-right">
        {/* hero content */}
        <div className="md:mx-16 lg:pl-8 pt- w-[90%] lg:w-[40%] mx-auto">
          <img
            src="/meet.png"
            alt="hero image"
            className="w-[100%] block  my-8 py-8 mx-auto lg:hidden aspect-auto"
          />
          <h1 className="my-4 text-4xl font-semibold  font-poppins leading-[2.95rem]  text-slate-700">
            Lets make your business live with{" "}
            <span className="bg-white text-slate-700 lg:bg-slate-200 -2 inline-block">
              &nbsp;Grow
              <span className="bg-red-500 px-2 inline-block text-white">
                Heist&nbsp;
              </span>
            </span>
          </h1>
          <p className="text-slate-600 font-poppins my-2 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            molestias consectetur cum non voluptatum temporibus, tenetur itaque
            in minima est praesentium quidem asperiores earum laborum ea
            consequuntur vel aliquam dignissimos?
          </p>
          <button
            className="bg-gradient-to-r flex items-center from-red-600 via-red-500 px-8 py-4 my-8
          shadow-lg shadow-slate-800/20 hover:shadow-none transition-all hover:opacity-90 rounded-full  text-white to-slate-500"
          >
            {" "}
            Start project with us
            <FaArrowRight className="mx-4 " />
          </button>
        </div>
      </div>
      {searchBox && (
        <Search searchBox={searchBox} setSearchBox={setSearchBox} />
      )}
    </div>
  );
}

export default App;
