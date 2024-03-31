import React from "react";
import HeroImg from "../../assets/coffee2.png";
import { FaGrinHearts } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-medium font-para_font select-none"
            >
              We offer the city's best{" "}
              <span
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-delay="300"
                className="text-primary font-medium font-cursive"
              >
                coffee
              </span>
              !
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200 select-none">
                Coffee & Chill
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
          >
            <img
              src={HeroImg}
              alt=""
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin select-none"
              draggable="false"
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary absolute top-20 left-10 p-2 rounded-full z-10"
            >
              <FaGrinHearts
                size={36}
                className=" hover:scale-110 duration-200"
              />
            </div>
            <div
              data-aos="fade-right"
              className="bg-gradient-to-r from-primary to-secondary absolute bottom-16 right-10 p-3 rounded-full"
            >
              <GiCoffeeBeans
                size={38}
                className=" hover:scale-110 duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
