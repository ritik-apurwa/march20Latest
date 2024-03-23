import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { nav_ul } from "../../../assets/data/rootdata/navdata";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "../../searchbar/Searchbar";
import DarkModeToggle from "../../theme/Theme";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button className="p-2" onClick={toggleSidebar}>
        <FiMenu />
      </button>

      <motion.section
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen  bg-gray-800 text-white w-10/12"
      >
        <div className="pt-10">
          <ul className="py-4 flex items-center justify-between px-10 w-full">
            <Searchbar />
            <DarkModeToggle/>
          </ul>
          <ul className="flex flex-col items-center">
            {nav_ul.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-2"
              >
                <Link
                onClick={toggleSidebar}
                  className={`block justify-normal w-fit capitalize ${
                    location.pathname === item.url ? "text-red-500" : ""
                  }`}
                  to={item.url}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Sidebar;
