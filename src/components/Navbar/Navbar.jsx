import React from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { SiCoffeescript } from "react-icons/si";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/coffee-haven",
  },
  {
    id: 2,
    name: "Services",
    link: "/coffee-haven/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/coffee-haven/#about",
  },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="/coffee-haven"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-logo_font"
            >
              <img src={Logo} alt="Coffee Haven logo" className="w-14" />
              <span className="pr-4">Coffee Haven</span>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className=" inline-block text-xl py-4 px-4 text-white/80 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2.5">
              Order
              <SiCoffeescript className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
