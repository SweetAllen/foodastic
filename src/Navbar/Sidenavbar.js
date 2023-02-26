import { useState } from "react";
import control from "../../src/assets/control.png"
import logo from "../../src/assets/logo.png"
import calendar from "../../src/assets/Calendar.png"
import chartfill from "../../src/assets/Chart_fill.png"
import chart from "../../src/assets/Chart.png"
import chat from "../../src/assets/Chat.png"
import folder from "../../src/assets/Folder.png"
import search from "../../src/assets/Search.png"
import setting from "../../src/assets/Setting.png"
import user from "../../src/assets/User.png"
import { NavLink } from "react-router-dom";
import './Sidenavbar.css'
const Sidenavbar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: chartfill },
    { title: "Test", src: chat },
    { title: "Accounts", src: user, gap: true },
    { title: "Orders ", src: calendar },
    { title: "Search", src: search },
    // { title: "Analytics", src: chart},
    // { title: "Files ", src:folder, gap: true },
    { title: "Setting", src:setting },
  ];

  let activeClass = `flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 bg-light-white`

  return (
    // <div className="container">
    <div className="flex flex-direction-row position-absolute ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Foodastic
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li>

            <NavLink
            to={Menu.title}
              key={index}
              // className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              // ${Menu.gap ? "mt-9" : "mt-2"} ${
              //   index === 0 && "bg-light-white"
              // } `}
              className={
                ({ isActive }) =>
              isActive ? activeClass : `flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"}`
              }
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </NavLink>
            </li>

          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
    // </div>

  );
};
export default Sidenavbar;

