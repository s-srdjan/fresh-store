import Button from "./Button";

function HomeSlider({ testimonial }) {
  const { id, name, headshot, stars, location, body } = testimonial;

  return (
    <div>
      <div>
        <h2>What Our Customers Say</h2>
        <p>
          Read on to see why they can`&apos;`t get enough of our freshly baked
          goodness.
        </p>
      </div>
      <div>
        <Button type="round">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </Button>
        <div>
          <div className="flex">
            <div className="h-30 w-30 overflow-hidden">
              <img
                src={headshot}
                alt={headshot}
                className="h-full w-full object-cover"
              />
            </div>
            <p>{name}</p>
            <p>{location}</p>
            <p>{body}</p>
          </div>
        </div>
        <Button type="round">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default HomeSlider;
