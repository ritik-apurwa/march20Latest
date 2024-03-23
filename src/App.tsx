import React from "react";
import { Route, Routes } from "react-router-dom";
import Searchbar from "./components/searchbar/Searchbar";
import SearchbarResults from "./components/searchbar/SearchbarResults";
import Home from "./pages/roots/Home";
import { About } from "./pages/roots/About";
import Contact from "./pages/roots/Contact";
import Navbar from "./components/common/navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <section className="w-screen container h-auto bg-white dark:bg-black max-w-screen-xl mx-auto">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/search/:id" element={<SearchbarResults />} />
        </Routes>
      </section>
    </>
  );
};

export default App;
