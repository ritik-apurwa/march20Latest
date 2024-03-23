import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GrStarOutline } from "react-icons/gr";
import { coursesCard } from "../../../assets/data/coursedata/appdata";

const CourseCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerPage(3); // On large screens (lg), show 3 cards per page
    } else if (window.innerWidth >= 768) {
      setCardsPerPage(2); // On medium screens (md), show 2 cards per page
    } else {
      setCardsPerPage(1); // On small screens, show 1 card per page
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage < coursesCard.length
        ? prevIndex + cardsPerPage
        : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerPage >= 0
        ? prevIndex - cardsPerPage
        : coursesCard.length - cardsPerPage
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
    const dotsCount = Math.ceil(coursesCard.length / cardsPerPage);
    const dots = [];
    for (let i = 0; i < dotsCount; i++) {
      dots.push(
        <button
          key={i}
          className={`h-3 w-3 bg-black rounded-full focus:outline-none ${
            currentIndex >= i * cardsPerPage &&
            currentIndex < (i + 1) * cardsPerPage
              ? "bg-red-400"
              : "bg-black"
          }`}
          onClick={() => setCurrentIndex(i * cardsPerPage)}
        />
      );
    }
    return dots;
  };

  return (
    <div className="bg-secondary-1 py-10 flex flex-col">
      <motion.div
        id="main_div"
        className="bg-secondary-1 space-y-4 space-x-4   rounded-md overflow-hidden"
        key={currentIndex}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div
          id="cards"
          className="p-2 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto"
        >
          {coursesCard
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((val, index) => (
              <div
              id="card"
                className="rounded-md shadow-xl custom-shadow p-2 bg-gray-200"
                key={index}
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 flex-shrink-0 custom_shadow rounded-full bg-[#1eb2a6]">
                    <img
                      className="w-full h-full p-2 rounded-full"
                      src={val.cover}
                      alt="Course"
                    />
                  </div>
                  <h1 className="ml-4 text-xl font-semibold">
                    {val.coursesName}
                  </h1>
                </div>

                <div className="flex justify-center items-center mb-4 text-[#1eb2a6]">
                  {[...Array(5)].map((_, index) => (
                    <GrStarOutline key={index} className="w-4 mr-1" size={18} />
                  ))}
                  <span>(5.0)</span>
                </div>

                {val.courTeacher.map((details, index) => (
                  <div className="flex items-center mb-4" key={index}>
                    <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={details.dcover}
                        alt="Teacher"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm ">{details.totalTime}</div>
                      <h2 className="text-lg font-semibold">{details.name}</h2>
                    </div>
                  </div>
                ))}

                <div className="mb-4 flex flex-col space-y-4 justify-center text-[#1eb2a6]">
                  <h3 className="flex flex-row justify-center w-full ">
                    {val.priceAll} / {val.pricePer}
                  </h3>
                  <button className="w-full py-2 bg-[#1eb2a6] text-white font-semibold rounded-md hover:bg-[#0e8b7b] transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
      <div className="flex flex-row justify-center mx-auto max-w-3xl min-w[768px] w-full gap-x-4 p-2">
        {generatePaginationDots()}
      </div>
      <div className="flex flex-row justify-between mx-auto max-w-3xl min-w[768px] w-full gap-x-4 p-2">
        <button
          className="w-full py-2  bg-[#1eb2a6] text-white font-semibold rounded-md hover:bg-[#0e8b7b] transition duration-300"
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
  );
};

export default CourseCard;
