import { BadgeCheck, Filter, Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const OPTION = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Albums",
  },
  {
    id: 3,
    name: "Artists",
  },
  {
    id: 5,
    name: "Playlists",
  },
];

const LibrarySearchBar = ({isSidebarOpen,selectedOption, setSelectedOption}) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const searchInput = React.useRef(null);
  const filterRef = React.useRef(null);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      searchInput.current.value = "";
    } else {
      searchInput.current.focus();
    }
  };

  const handleFilterClick = () => {
    filterRef.current.classList.toggle("hidden");
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.textContent);
    filterRef.current.classList.toggle("hidden");
  };

  return (
    <div className={`flex justify-between items-center mt-2 relative ${!isSidebarOpen&&"hidden"}`}>
      <div className="relative">
        <motion.input
          initial={{ width: 0 }}
          animate={{ width: isSearchOpen ? "100%" : "0" }}
          transition={{ duration: 0.3 }}
          type="text"
          ref={searchInput}
          className={`${
            isSearchOpen
              ? "bg-white/10"
              : "bg-transparent hover:bg-white/10 rounded-full"
          }  cursor-pointer transition-all pl-7 py-1 text-sm rounded-md outline-none `}
          placeholder="Search Your Library"
        />
        <Search
          onClick={handleSearchClick}
          size={20}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 cursor-pointer text-white/70"
        />
      </div>
      <p className="text-white/70 p-2">{selectedOption}</p>
      <Filter
        onClick={handleFilterClick}
        size={20}
        className="cursor-pointer text-white/70"
      />
      <div
        ref={filterRef}
        className="absolute hidden text-xs w-24 h-auto bg-black/80 -right-4 top-8 p-2"
      >
        {OPTION.map((item, index) => (
          <div
            key={index}
            onClick={handleOptionChange}
            className={`${
              selectedOption === item.name ? "text-green-500" : "text-white/70"
            } cursor-pointer p-2 hover:bg-white/40 flex gap-2 items-center`}
          >
            <span className="flex gap-3 justify-between">
              {item.name}
              {selectedOption === item.name && (
                <BadgeCheck size={15} className="text-green-500" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibrarySearchBar;
