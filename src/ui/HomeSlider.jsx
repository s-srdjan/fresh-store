import Button from "./Button";

function HomeSlider({ testimonial }) {
  const { id, name, headshot, stars, location, body } = testimonial;

  return (
    <div className="relative mt-12 rounded-md bg-stone-50 before:absolute before:inset-0 before:z-[-1] before:translate-x-[4.5%] before:translate-y-[5.5%] before:scale-[0.94] before:rounded-lg before:bg-gradient-to-r before:from-amber-400 before:to-amber-700  before:opacity-[0.4] before:blur-[10px]">
      <div className="grid gap-8 p-8">
        <h2 className="relative z-0 m-auto text-lg font-medium before:absolute before:inset-0 before:z-[-1] before:h-[50%] before:translate-y-[120%] before:scale-[1.05]  before:bg-gradient-to-r before:from-amber-100 before:to-amber-300 before:blur-[1px] md:text-2xl">
          What Our Customers Say
        </h2>
        <p className="font-medium">
          Read on to see why they can&apos;t get enough of our freshly baked
          goodness.
        </p>
      </div>
      <div className="overflow-hidden px-2">
        <Button type="right_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            className="pointer-events-none fill-current stroke-current"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </Button>
        <div className="flex">
          <div className="grid max-w-full flex-[1_0_100%] place-items-center gap-[1.3rem] px-8 pb-8">
            <div className="h-32 w-32 overflow-hidden">
              <img src={headshot} alt={headshot} className="rounded-full " />
            </div>
            <p className="font-bold tracking-wider">{name}</p>
            <p className="mt-[-1rem] text-stone-500">{location}</p>
            <p className="margin-auto max-w-lg font-medium italic">{body}</p>
          </div>
        </div>
        <Button type="left_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
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
