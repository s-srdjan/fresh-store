import { useState } from "react";
import { loadStars } from "../utils/helpers";
import Button from "./Button";

function HomeSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];
  const { name, headshot, stars, location, body } = testimonial;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="max-h-22rem relative mt-4 self-end rounded-md bg-stone-50 before:absolute before:inset-0 before:z-[-1] before:translate-x-[4.5%] before:translate-y-[5.5%] before:scale-[0.94] before:rounded-lg before:bg-gradient-to-r before:from-amber-400 before:to-amber-700  before:opacity-[0.4] before:blur-[10px]">
      <div className="grid gap-5 p-4">
        <h2 className="relative z-0 m-auto text-base font-medium before:absolute before:inset-0 before:z-[-1] before:h-[50%] before:translate-y-[120%] before:scale-[1.05]  before:bg-gradient-to-r before:from-amber-100 before:to-amber-300 before:blur-[1px] md:text-xl">
          What Our Customers Say
        </h2>
      </div>
      <div className="px-2">
        <Button type="right_arrow" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="pointer-events-none fill-current stroke-current"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </Button>
        <div>
          <div className="grid max-w-full  place-items-center gap-4 px-16 pb-4">
            <div className="h-20 w-20 overflow-hidden md:h-28 md:w-28">
              <img src={headshot} alt={headshot} className="rounded-full " />
            </div>
            <p className="text-sm font-bold tracking-wider">{name}</p>
            <p className="mt-[-1rem] text-sm text-stone-500">{location}</p>
            <div className="flex">{loadStars(stars)}</div>
            <p className="m-auto h-[80px] max-w-lg text-sm font-medium italic">
              {body}
            </p>
          </div>
        </div>
        <Button type="left_arrow" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256"
            className="pointer-events-none fill-current stroke-current"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default HomeSlider;
