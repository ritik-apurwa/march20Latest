import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { HtmlElement, sdata } from "./SearchbarData";

const Searchbar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<HtmlElement[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (query) {
      setValue(query);
      performSearch(query);
      setShowResults(true);
    }
  }, [query]);

  useEffect(() => {
    if (showResults && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showResults]);

  const handleOpenClick = () => {
    if (!showResults) {
      setShowResults(true);
    } else {
      performSearch(value);
    }
  };

  const handleCloseClick = () => {
    setShowResults(false);
    setValue("");
    setSearchResults([]);
    setSelectedResultIndex(0);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    performSearch(inputValue);
  };

  const performSearch = (input: string) => {
    try {
      const filteredLinks = sdata.filter(
        (link) =>
          link.tag.toLowerCase().includes(input.toLowerCase()) ||
          link.description.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(filteredLinks);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedResultIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedResultIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const ResultCount = () => {
    return (
      <div className="mb-1 container space-y-4 max-w-screen-lg mx-auto">
        {value ? (
          searchResults && searchResults.length > 0 ? (
            <h1 className="SearchBarNoResultFound">
              {searchResults.length} results found
            </h1>
          ) : (
            <h1>Not Available Yet ....... </h1>
          )
        ) : null}
      </div>
    );
  };

  return (
    <>
      <motion.button
        className=""
        onClick={handleOpenClick}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 cursor-text">
          <FaSearch className="text-gray-500 mr-2" />
          <span className="text-gray-500">Search...</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {showResults && (
          <motion.div
            className="fixed inset-0 flex items-start justify-center"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-4 w-full rounded-lg shadow-lg">
              <div className="flex  items-center justify-center mb-4">
                <form className="max-w-screen-xl  container">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <BiSearch />
                    </div>

                    <input
                      type="search"
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      value={value}
                      ref={inputRef}
                      autoComplete="off"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search here"
                      required
                    />
                    <button
                      type="button"
                      onClick={handleCloseClick}
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      close
                    </button>
                  </div>
                </form>
              </div>

              <ResultCount />
              <div>
                {value && searchResults.length > 0 && (
                  <motion.div
                    onKeyDown={handleKeyDown}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="container flex flex-col overflow-y-auto h-auto max-h-[600px] text-black space-y-4 max-w-screen-lg mx-auto "
                  >
                    {searchResults.map((result, index) => (
                      <Link
                        to={`/search/${result.id}`} // Assuming the route is /item/:id
                        onClick={handleCloseClick}
                        className={`block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 ${
                          selectedResultIndex === index ? "bg-blue-200" : ""
                        }`}
                      >
                        <div
                          onKeyDown={handleKeyDown}
                          className="flex pb-1 flex-row p-0 m-0"
                        >
                          {result.tag
                            .split(new RegExp(`(${value})`, "gi"))
                            .map((part, index) =>
                              part.toLowerCase() === value.toLowerCase() ? (
                                <h1
                                  key={index}
                                  className="block capitalize text-red-400 font-bold"
                                >
                                  {part}
                                </h1>
                              ) : (
                                <h1 className="block" key={index}>
                                  {part}
                                </h1>
                              )
                            )}
                        </div>
                        <p className="text-sm">
                          {result.description
                            .split(new RegExp(`(${value})`, "gi"))
                            .map((part, index) =>
                              part.toLowerCase() === value.toLowerCase() ? (
                                <span
                                  key={index}
                                  className="text-red-400                                  "
                                >
                                  {part}
                                </span>
                              ) : (
                                <span className="" key={index}>
                                  {part}
                                </span>
                              )
                            )}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Searchbar;
