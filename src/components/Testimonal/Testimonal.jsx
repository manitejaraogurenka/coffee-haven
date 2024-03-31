import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Ganesh S",
    text: "The coffee at Coffee Haven is simply amazing! It's the perfect blend of rich flavors and aroma.",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 2,
    name: "Maniteja Gurenka",
    text: "I've tried coffee from all over the world, but Coffee Haven's brew is truly exceptional. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    name: "Vishwa J",
    text: "As a coffee enthusiast, I can confidently say that Coffee Haven serves some of the best coffee I've ever tasted.",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 4,
    name: "Joel K Senu",
    text: "Coffee Haven's ambiance and the quality of their coffee make it my go-to place for a relaxing cup of joe.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 5,
    name: "Vallabha",
    text: "I love how Coffee Haven always has new and exciting blends to try. It's a coffee lover's paradise!",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 6,
    name: "Tamil Selvam S",
    text: "The staff at Coffee Haven are always friendly and welcoming. It's a great place to unwind after a long day.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 7,
    name: "Deeksha RV",
    text: "I've never been disappointed with the coffee at Coffee Haven. It's consistently delicious and satisfying.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 8,
    name: "Shiva Shankar",
    text: "Coffee Haven's attention to detail sets them apart. Every cup is crafted with care and precision.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 9,
    name: "Tiviya T",
    text: "The coffee at Coffee Haven is top-notch. It's the perfect pick-me-up any time of day.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 10,
    name: "Nandha Kumar",
    text: "I can't get enough of Coffee Haven's coffee. It's like a little slice of heaven in every cup.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Testimonal = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        infinite: true,
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div data-aos="fade-up" className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonals
          </h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, Index) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt="People's Images"
                        className=" rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/60 font-cursive">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
