import React, { useState } from "react";
import svg1 from "../../assets/sidebar/1.svg";
import svg2 from "../../assets/sidebar/2.svg";
import svg3 from "../../assets/sidebar/3.svg";
import svg6 from "../../assets/sidebar/6.svg";
import svg11 from "../../assets/sidebar/11.svg";
import Nav from "../nav/nav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const success = useSelector((state) => state.SignupSlice.success)

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    { icon: svg1, text: "Dashboard", link: "/DashBoard" },
    { icon: svg6, text: "Booking", link: "/Booking" },
    { icon: svg11, text: "Add Location", link: "/AddLocation" },
    { icon: svg6, text: "ParkingOverView", link: "/ParkingSpaceOverView" },
  ];

  return (
    <div>
      <Nav>
        <button
          onClick={() => setSidebar(!sidebar)}
          className="bg-[#5932EA]  p-2  ml-3 text-sm rounded-lg md:hidden "
        >
          <svg
            className="w-6 h-6 "
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </Nav>
      <section
        style={{ boxShadow: "0px 20px 50px rgba(220, 224, 249, 0.5)" }}
        className={`overflow-auto fixed top-[102px] pl-[35px] h-full z-40 w-[273px] p-4  transition-transform  ${
          sidebar ? "-translate-x-full" : " "
        }  md:translate-x-0 bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label`}
      >
        <button
          type="button"
          onClick={() => setSidebar(!sidebar)}
          className="  text-gray-400 md:hidden bg-transparent    text-sm p-1.5  flex justify-end w-full  "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
          </svg>
        </button>
      

        <div className="py-4 overflow-y-auto font-bold text-[1.1875rem]">
          <ul className="flex flex-col gap-10">
            {menuItems.map((item, index) => (
              <Link to={item.link}>
                <li
                
                  className={`flex items-center cursor-pointer p-2 text-base font-normal ${
                    activeItem === index
                      ? "text-white bg-[#5932EA]"
                      : "text-black"
                  }  rounded-lg `}
                  onClick={() => handleClick(index)}
                >
                  <img src={item.icon} alt="" />
                  <span className="ml-3 font-bold text-[1.1875rem]">
                    {item.text}
                  </span>

                  {activeItem === index && (
                    <div className="bg-[#5932EA] w-[6px] h-[40px] absolute left-0 rounded-tr-lg rounded-br-lg"></div>
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
      <div className="w-[273px]" />
    </div>
  );
};

export default Sidebar;
