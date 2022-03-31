import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ setSearchBox, searchBox }) => {
  const toggleOverlay = (e) => {
    if (e.target.id === "overlay") {
      setSearchBox(!searchBox);
    }
  };
  return (
    <div
      id="overlay"
      onClick={toggleOverlay}
      className="fixed grid place-items-center top-0 left-0 h-screen w-screen backdrop-filter backdrop-blur-md"
    >
      <div className="max-w-xl min-h-28 w-[90%] py-8  px-4 bg-white/80  mx-auto  shadow-md  shadow-slate-400 rounded-md">
        {/* search form */}
        <div className="w-full  overflow-hidden relative flex items-center border border-slate-600/40 rounded-md bg-white">
          <span className="absolute top-0 right-0 text-slate-700 h-full grid pr-4  bg-slate-100 items-center">
            <code>
              <pre> alt + /</pre>
            </code>
          </span>
          <button className="w-12 grid place-items-center text-slate-700 h-full ">
            <AiOutlineSearch />
          </button>
          <input
            type="search"
            placeholder="Search for queries..."
            className="bg-none  outline-none w-full py-2 px-4 rounded-md"
          />
        </div>

        <h4 className="mt-8 mx-4 text-xl text-slate-700 font-semibold">Popular searches...</h4>
        <ul className="mx-4 px-4 mt-4">
          <li>Do growheist provides internships ?</li>
          <li>growheist clients</li>
          <li>backend internships</li>
          <li>where is office of growheist ?</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
