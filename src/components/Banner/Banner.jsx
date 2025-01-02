import { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TMTDEljbfzZmeiiu2lWUbWdSCQsh2xXkXw&s",
      title: "Chocolate Gift Box",
      subtitle: "MAKE YOUR OWN ASSORTED",
      buttonText: "DISCOVER MORE",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplvoLSDlziWTWfax8miV-sAMJsbHBz11zvw&s",
      title: "Premium Chocolates",
      subtitle: "PERFECT FOR YOUR LOVED ONES",
      buttonText: "SHOP NOW",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TbPWYNvwCm2KqavPo0Ij7PxFdLJ4n0mxLw&s",
      title: "Delicious Treats",
      subtitle: "SWEETNESS IN EVERY BITE",
      buttonText: "EXPLORE",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex items-center justify-center h-screen w-full ">
      <div className="relative w-[90%] max-w-[800px] h-[400px] flex items-center justify-center bg-black overflow-hidden rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover opacity-50 rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
              <h4 className="text-sm tracking-widest text-orange-400">
                {slide.subtitle}
              </h4>
              <h1 className="text-4xl font-bold mt-2">{slide.title}</h1>
              <button
                className="mt-4 px-6 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition-all"
                onClick={() => alert(`${slide.buttonText} clicked!`)}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
