import React from "react";
import Espresso from "../../assets/Coffee types/Espresso.png";
import Cappuccino from "../../assets/Coffee types/Cappuccino.png";
import Latte from "../../assets/Coffee types/Latte.png";
import Macchiato from "../../assets/Coffee types/Macchiato.png";
import Mocha from "../../assets/Coffee types/Mocha.png";
import Americano from "../../assets/Coffee types/Americano.png";

const ServicesData = [
  {
    id: 1,
    img: Espresso,
    name: "Espresso",
    description:
      "A strong and concentrated coffee made by forcing a small amount of nearly boiling water through finely ground coffee beans. It has a rich flavor and a crema on top.",
    price: "₹60",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Cappuccino,
    name: "Cappuccino",
    description:
      "An espresso-based coffee drink that originated in Italy. It is typically composed of equal parts of espresso, steamed milk, and milk foam, topped with cinnamon or cocoa powder.",
    price: "₹120",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Latte,
    name: "Latte",
    description:
      "A coffee drink made with espresso and steamed milk. It is typically creamier and smoother than a cappuccino, with a small amount of foam on top.",
    price: "₹100",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Macchiato,
    name: "Macchiato",
    description:
      "An espresso coffee drink with a small amount of milk, usually foamed. It is similar to a latte but with a stronger coffee flavor.",
    price: "₹80",
    aosDelay: "100",
  },
  {
    id: 5,
    img: Mocha,
    name: "Mocha",
    description:
      "A coffee drink that combines espresso, steamed milk, and chocolate syrup or cocoa powder. It has a rich and chocolatey flavor.",
    price: "₹150",
    aosDelay: "300",
  },
  {
    id: 6,
    img: Americano,
    name: "Americano",
    description:
      "A coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, drip coffee.",
    price: "₹90",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800 select-none">
              Discover your perfect brew at our coffee haven...
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map((data, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={index}
                    className="cursor-pointer my-8 rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative select-none"
                  >
                    <div className="h-[122px] w-[122px]">
                      <img
                        src={data.img}
                        alt={`An Image of ${data.img}`}
                        className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300 select-none"
                        draggable={false}
                      />
                    </div>
                    <div className="float-end mr-2 bg-slate-700 text-white rounded-lg group-hover:duration-300 group-hover:text-black group-hover:bg-white">
                      <p className="p-1 text-sm">{data.price}</p>
                    </div>

                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold group-hover:underline">
                        {data.name}
                      </h1>
                      <p className=" text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-4">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
