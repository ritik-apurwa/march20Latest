import { Link, useLocation } from "react-router-dom";
import { nav_ul } from "../../../assets/data/rootdata/navdata";
import Searchbar from "../../searchbar/Searchbar";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full z-50  sticky top-0 items-center h-16 flex px-2 flex-row justify-between bg-white">
        <div>
          <h1 className="text-lg font-bold ">HopeEdu</h1>
        </div>

        <div>
          <ul className="lg:flex hidden flex-row capitalize  gap-x-4">
            {nav_ul.map((item, index) => (
              <Link
                key={index}
                className={`block justify-normal w-fit capitalize ${
                  location.pathname === item.url ? "text-red-500" : ""
                }`}
                to={item.url}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex gap-x-4 flex-row">
          <Searchbar />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
