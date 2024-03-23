import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { online } from "../../../assets/data/coursedata/appdata";

const OnlineCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerPage(6); // On large screens (lg), show 6 cards per page
    } else if (window.innerWidth >= 768) {
      setCardsPerPage(4); // On medium screens (md), show 4 cards per page
    } else {
      setCardsPerPage(2); // On small screens, show 2 cards per page
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage < online.length ? prevIndex + cardsPerPage : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerPage >= 0
        ? prevIndex - cardsPerPage
        : online.length - cardsPerPage
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to generate pagination dots
  const generatePaginationDots = () => {
    const dotsCount = Math.ceil(online.length / cardsPerPage);
    const dots = [];
    for (let i = 0; i < dotsCount; i++) {
      dots.push(
        <button
          key={i}
          className={`h-3 w-3 bg-black rounded-full focus:outline-none ${
            currentIndex >= i * cardsPerPage &&
            currentIndex < (i + 1) * cardsPerPage
              ? "bg-gray-400"
              : "bg-gray-200"
          }`}
          onClick={() => setCurrentIndex(i * cardsPerPage)}
        />
      );
    }
    return dots;
  };

  return (
    <section id="online_courses" className="online flex flex-col items-stretch bg-secondary-1 ">
      <div className="container relative py-10 mx-auto">
        <motion.div
          id="cards"
          className="grid grid-cols-2 px-2  md:grid-cols-4 items-stretch lg:grid-cols-6 gap-4 justify-center"
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {online
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((val, index) => (
              <div
                id="card"
                className="box flex flex-col custom-shadow  justify-between shadow-md bg-zinc-50 rounded-md p-4 text-center transition duration-500 ease-in-out transform hover:bg-gray-700 hover:text-white"
                key={index}
              >
                <div id="card_imgs" className="mx-auto mb-4 w-20 h-20">
                  <img
                    src={val.cover}
                    alt={val.courseName}
                    className="w-full h-full p-1 object-cover rounded-full"
                  />
                </div>

                <div
                  id="course_count_and_coursename"
                  className="w-full flex flex-col"
                >
                  <h1 className="font-semibold text-center text-base mb-4">
                    {val.courseName}
                  </h1>
                  <span className="bg-gray-200 px-4 py-1 text-green-600 font-semibold text-sm rounded-md">
                    {val.course}
                  </span>
                </div>
              </div>
            ))}
        </motion.div>
      </div>

      <div className="   w-full" id="dots_and_buttons">
        <div className="flex  flex-row justify-center mx-auto max-w-3xl min-w[768px] w-full gap-x-4 p-2">
          {generatePaginationDots()}
        </div>
        <div className="flex flex-row justify-between mx-auto max-w-3xl min-w[768px] w-full gap-x-4 p-2">
          <button
            className="w-full py-2 bg-[#1eb2a6] text-white font-semibold rounded-md hover:bg-[#0e8b7b] transition duration-300"
            onClick={prevSlide}
          >
            Previous
          </button>
          <button
            className="w-full py-2 bg-[#1eb2a6] text-white font-semibold rounded-md hover:bg-[#0e8b7b] transition duration-300"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
