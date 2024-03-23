import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { blog } from "../../../assets/data/coursedata/appdata";

const Blog = () => {
  const [, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blog.length);
    }, 5000); // Adjust the duration for one round

    setIntervalId(id);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div
      id="comments_box"
      className="overflow-hidden bg-secondary-1"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="float-animation py-10  flex flex-row ">
        {[...blog, ...blog].map((val, index) => (
          <motion.div
            id="each_comment"
            className="blog-card  hover:scale-110  flex flex-col bg-white rounded-xl   text-black items-center mx-2 px-4 py-4 border border-gray-300  shadow-xl hover:shadow-lg transition-all  duration-300 ease-in-out"
            key={index}
            style={{ marginLeft: index === 0 ? "0" : "10px" }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div id="commenters_pic" className="flex p-1  w-20 h-20 py-2">
              <img
                src={val.cover}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>

            <div
              id="comment_starting_line_data_user_type"
              className="flex flex-col"
            >
              <h4
                id="comment-charecters"
                className="font-medium text-sm md:text-lg mb-1"
              >
                {val.title.slice(0, 40)}...
              </h4>

              <div
                id="commnet_date_date_icons"
                className="flex items-center text-[#1eb2a6]"
              >
                <AiOutlineCalendar className="mr-1 " />
                <span className="text-sm">{val.date}</span>
              </div>

              <div
                id="user_icon_user_type"
                className="flex items-center text-[#1eb2a6]"
              >
                <AiOutlineUser className="mr-1" />
                <span className="text-sm capitalize">{val.type}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
