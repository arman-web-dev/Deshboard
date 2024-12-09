import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import AboutAdminPanel from "./components/AboutAdminPanel";
import AdminCard from "./components/AdminCard";

const App = () => {
  let [activeMenu, setActiveMenu] = useState("Navbar");

  let handleActive = (menu) => {
    setActiveMenu(menu);
    console.log(menu);
  };

  return (
    <div>
      <h1 className="font-bold text-center text-[36px]">Dashboard</h1>
      <div className="flex justify-between">
        <div className="w-[30%] h-[100vh]">
          <ul className="mt-[30px] ">
            {[
              "Navbar","Banner","About","Service","Resume","Portfolio","Blog","Contact","Footer"
            ].map((menu) => (
              <li
                key={menu}
                onClick={() => handleActive(menu)}
                className={`py-3 px-2 border-b cursor-pointer font-bold duration-300 ${
                  activeMenu === menu
                    ? "bg-slate-400 text-white"
                    : "hover:bg-slate-400"
                }`}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[70%] mt-[30px]">
          {activeMenu === "Navbar" && <Navbar />}
          {activeMenu === "Banner" && <Banner />}
          {activeMenu === "About" && <AboutAdminPanel />}
          {activeMenu === "Service" && <AdminCard />}
          {activeMenu === "Resume" && <h1>Resume</h1>}
          {activeMenu === "Portfolio" && <h1>Portfolio</h1>}
          {activeMenu === "Blog" && <Blog />}
          {activeMenu === "Contact" && <h1>Contact</h1>}
          {activeMenu === "Footer" && <h1>Footer</h1>}
        </div>
      </div>
    </div>
  );
};

export default App;
